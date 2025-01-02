
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
    const { category, difficulty } = await req.json(); 
    console.log('Request received:', { category, difficulty });

    const response = await axios.post(
      'https://api-inference.huggingface.co/models/google/flan-t5-large',
      { inputs: `Generate an activity for ${category} with ${difficulty} difficulty` },
      { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } }
    );

    const activity = new Activity({
      title: response.data.title || 'Generated Activity',
      description: response.data.description || 'No description provided',
      timeEstimate: difficulty === 'Easy' ? '30min' : difficulty === 'Medium' ? '2hrs' : '4hrs',
      difficulty,
      category,
    });

    await activity.save();

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
