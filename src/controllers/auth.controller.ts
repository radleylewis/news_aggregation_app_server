import { Request, Response, NextFunction } from 'express';

import { IAuthController, IUserInterface } from '../interfaces';
import { UserModel } from '../models';

class AuthController implements IAuthController {

  /* METHOD: sign-up for new users */
  signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: IUserInterface.IUserData = req.body;
      const user = new UserModel(userData);
      user.save();
      res.status(201).send(JSON.stringify(userData));
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
    };
  };

  /* METHOD: sign-in for existing users */
  signIn(req: Request, res: Response, next: NextFunction) {
    res.status(200).send('sign in');
  };
};

export default AuthController;
