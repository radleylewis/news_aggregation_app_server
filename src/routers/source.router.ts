import express from 'express';

import { sourceController } from '../controllers';

const authRouter = express.Router();

authRouter.get('/', sourceController.deploySources);

authRouter.patch('/', sourceController.addPrefSource);

export default authRouter;
