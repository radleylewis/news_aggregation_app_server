import { Schema, model } from 'mongoose';

import { IUserInterface } from '../interfaces';

const userSchema: Schema = new Schema({
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

export default model<IUserInterface.IUserData>('User', userSchema);
