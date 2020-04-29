import { Schema, model } from 'mongoose';

import { IUserInterface } from '../interfaces';

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

const User = model<IUserInterface.IUserData>('User', userSchema);
export default User;

