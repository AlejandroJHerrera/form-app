import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  dni: { type: String },
  password: { type: String, required: true },
  signature: { type: String },
  isAdmin: { type: Boolean, default: false },
  Admin: { type: String, required: true },
});

export default mongoose.model('User', UserSchema);
