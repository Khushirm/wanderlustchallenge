// import axios from 'axios';
// import connectToDatabase from '../../../../utils/db';
// import Activity from '../../../../models/Activity';

// export async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   await connectToDatabase();

//   try {
//     const { category, difficulty } = req.body;
//     console.log('Request received:', req.body);

//     const response = await axios.post(
//       'https://api-inference.huggingface.co/models/google/flan-t5-large',
//       { inputs: `Generate an activity for ${category} with ${difficulty} difficulty` },
//       { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } }
//     );

//     const activity = new Activity({
//       title: response.data.title || 'Generated Activity',
//       description: response.data.description || 'No description provided',
//       timeEstimate: difficulty === 'Easy' ? '30min' : difficulty === 'Medium' ? '2hrs' : '4hrs',
//       difficulty,
//       category,
//     });

//     await activity.save();

//     res.status(201).json(activity);
//   } catch (error) {
//     console.error('Error generating activity:', error);
//     res.status(500).json({ message: 'Failed to generate activity' });
//   }
// }

import axios from 'axios';
import connectToDatabase from '../../../../utils/db';
import Activity from '../../../../models/Activity';

export async function POST(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await connectToDatabase();

  try {
    const { category, difficulty } = await req.json(); // Use req.json() instead of req.body
    console.log('Request received:', { category, difficulty });

    // Send request to Hugging Face API to generate activity
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/google/flan-t5-large',
      { inputs: `Generate an activity for ${category} with ${difficulty} difficulty` },
      { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } }
    );

    // Create a new Activity in the database
    const activity = new Activity({
      title: response.data.title || 'Generated Activity',
      description: response.data.description || 'No description provided',
      timeEstimate: difficulty === 'Easy' ? '30min' : difficulty === 'Medium' ? '2hrs' : '4hrs',
      difficulty,
      category,
    });

    await activity.save();

    // Return the generated activity as the response
    return new Response(JSON.stringify(activity), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating activity:', error);
    return new Response(JSON.stringify({ message: 'Failed to generate activity' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
