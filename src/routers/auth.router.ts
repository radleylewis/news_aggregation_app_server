import { Router } from 'express';

import { IAuthInterface } from '../interfaces';

const authRouter = (authController: IAuthInterface.IAuthController) => {
  const router = Router();
  router.post('/', authController.signUp);
  router.get('/', authController.signIn);
  return router;
};

export default authRouter;