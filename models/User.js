import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  points: { type: Number, default: 0 },
  completedActivities: [String], // IDs of completed activities
  achievements: [String], // Earned badges
});

export default mongoose.models.User || mongoose.model('User', userSchema);
