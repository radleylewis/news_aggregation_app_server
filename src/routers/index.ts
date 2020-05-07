import { Application } from 'express';

import { authenticate } from '../middleware';
import { AuthController, UserController, SourceController } from '../controllers';
import { ISourceInterface, IUserInterface, IAuthInterface } from '../interfaces';

const authController = new AuthController();
const userController = new UserController();
const sourceController = new SourceController();

import authRouter from './auth.router';
import sourceRouter from './source.router';
import userRouter from './user.router';

const routeRegistry = (app: Application) => {
  app.use('/auth', authRouter(authController));
  app.use('/sources', sourceRouter(sourceController));
  app.use('/users', authenticate, userRouter(userController));
};

export default routeRegistry;