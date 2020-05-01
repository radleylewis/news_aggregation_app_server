import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { ICustomError } from '../interfaces';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader: string = req.get('Authorization');
  const token: string = authHeader.split(' ')[1];
  const authenticated: string | object = jwt.verify(token, process.env.JWT_SECRET);
  if (authenticated) return next();
  const authError = new Error('authentication failure') as ICustomError;
  authError.statusCode = 401;
  throw authError;
};

export default authenticate;