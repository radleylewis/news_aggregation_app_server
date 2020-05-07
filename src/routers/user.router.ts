import { Router } from 'express';

import { IUserInterface } from '../interfaces';

const router = Router();

const userRouter = (userController: IUserInterface.IUserController) => {
  router.patch('/', userController.addPrefSource);
  return router;
};


export default userRouter;