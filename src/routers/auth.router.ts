import { Router } from 'express';

import { IAuthInterface } from '../interfaces';

const router = Router();

const authRouter = (authController: IAuthInterface.IAuthController) => {
  router.post('/', authController.signUp);
  router.get('/', authController.signIn);
  return router;
};

export default authRouter;