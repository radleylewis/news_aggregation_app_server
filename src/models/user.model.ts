import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  preferences: {
    type: Array,
    required: [false],
    default: 'ALL'
  },
});

export default model('User', userSchema);

