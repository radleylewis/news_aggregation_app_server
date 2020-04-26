import { Application } from 'express';
import authRoutes from './auth.routes';
import sourceRoutes from './source.routes';

const routeRegistry = (app: Application) => {
  app.use('/auth', authRoutes);
  app.use('/sources', sourceRoutes);
};

export default routeRegistry;