import express from 'express';

import { authController } from '../controllers';

const authRouter = express.Router();

authRouter.get('/sign-in', authController.signIn);

authRouter.post('/', authController.signUp);

export default authRouter;