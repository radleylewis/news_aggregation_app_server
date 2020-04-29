import { Document } from 'mongoose';

interface IUserData extends Document {
  username: string,
  password: string,
  email: string,
  preferences: string[],
};

export {
  IUserData,
};