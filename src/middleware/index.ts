import authenticate from './authentication.middleware';
import catchErrors from './error.middleware';
import cors from './cors.middleware';

export {
  authenticate,
  catchErrors,
  cors,
};