import { Application } from 'express';

import { authenticate } from '../middleware';
import authRouter from './auth.router';
import sourceRouter from './source.router';

const routeRegistry = (app: Application) => {
  app.use('/auth', authRouter);
  app.use('/sources', authenticate, sourceRouter);
};

export default routeRegistry;