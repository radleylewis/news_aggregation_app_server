import { Request, Response, NextFunction } from 'express';
import { securityService } from '../services';

import { IAuthController, IUserInterface } from '../interfaces';
import { UserModel } from '../models';

class AuthController implements IAuthController {

  /* METHOD: sign-up for new users */
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: IUserInterface.IUserData = req.body;
      userData.password = await securityService.hashPassword(userData.password)
      const result = await new UserModel(userData).save();
      res.status(201).send({ user_id: result._id });
    } catch (err) {
      res.status(500).send({ error: err.message });
    };
  };

  /* METHOD: sign-in for existing users */
  signIn(req: Request, res: Response, next: NextFunction) {
    res.status(200).send('sign in');
  };
};

export default AuthController;
