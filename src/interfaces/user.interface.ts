import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';

interface IUserController {
  addPrefSource(req: Request, res: Response, next: NextFunction): void,
};

interface IUserData extends Document {
  username: string,
  password: string,
  email: string,
  preferences: string[],
};

type IUserPreferences = {
  preferences: string[],
  username: string,
};

export {
  IUserController,
  IUserData,
  IUserPreferences,
};