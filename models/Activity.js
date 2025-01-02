import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  timeEstimate: String,
  difficulty: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Activity || mongoose.model('Activity', activitySchema);
