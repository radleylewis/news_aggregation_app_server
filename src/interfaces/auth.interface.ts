import { Request, Response, NextFunction } from 'express';

interface IAuthController {
  signUp(req: Request, res: Response, next: NextFunction): void,
  signIn(req: Request, res: Response, next: NextFunction): void,
};

export {
  IAuthController,
};