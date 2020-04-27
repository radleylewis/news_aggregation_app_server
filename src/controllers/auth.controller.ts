import { Request, Response, NextFunction } from 'express';

import { IAuthController, IUserInterface } from '../interfaces';

class AuthController implements IAuthController {

  /* METHOD: sign-up for new users */
  signUp(req: Request, res: Response, next: NextFunction) {
    const newUserData: IUserInterface.IUserNew = req.body;

    res.status(201).send(JSON.stringify(newUserData));
  };

  /* METHOD: sign-in for existing users */
  signIn(req: Request, res: Response, next: NextFunction) {
    res.status(200).send('sign in');
  };
};

export default AuthController;
