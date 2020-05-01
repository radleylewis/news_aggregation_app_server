import { Router } from 'express';

import { authController } from '../controllers';

const authRouter = Router();

authRouter.post('/', authController.signUp);

authRouter.get('/', authController.signIn);

export default authRouter;