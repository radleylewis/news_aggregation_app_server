import { Router } from 'express';

import { IUserInterface } from '../interfaces';

const userRouter = (userController: IUserInterface.IUserController) => {
  const router = Router();
  router.patch('/', userController.addPrefSource);
  return router;
};


export default userRouter;