import mongoose from 'mongoose';

// define at schema the blueprint for entity & it's fields
// each field has it's own meta data
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minLength: 5,
      maxLength: 50,
      required: [true, 'User Name is required'],
    },
    email: {
      type: String,
      required: [true, 'User Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'User Password is required'],
      minLength: 6,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
