import express from 'express';

import { authController } from '../controllers';

const authRouter = express.Router();

authRouter.post('/', authController.signUp);

authRouter.get('/', authController.signIn);

export default authRouter;