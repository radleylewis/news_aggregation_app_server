import AuthController from './auth.controller';
import SourceController from './source.controller';

const authController = new AuthController();
const sourceController = new SourceController();

export {
  authController,
  sourceController,
};