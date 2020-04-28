import { Application } from 'express';
import authRouter from './auth.router';
import sourceRouter from './source.router';

const routeRegistry = (app: Application) => {
  app.use('/auth', authRouter);
  app.use('/sources', sourceRouter);
};

export default routeRegistry;