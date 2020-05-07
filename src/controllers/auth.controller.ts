import { Request, Response, NextFunction } from 'express';
import { securityService } from '../services';

import { IAuthInterface, IUserInterface } from '../interfaces';
import { User } from '../models';

class AuthController implements IAuthInterface.IAuthController {

  /* METHOD: sign-up for new users */
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: IUserInterface.IUserData = req.body;
      userData.password = await securityService.hashPassword(userData.password);
      const { _id } = await new User(userData).save();
      res.status(201).send({ user_id: _id });
    } catch (err) {
      res.status(500).send({ error: err.message });
    };
  };

  /* METHOD: sign-in for existing users */
  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user: IUserInterface.IUserData = await User.findOne({ email });
      if (!user) throw new Error('no user account against provided email');
      const passwordMatch = securityService.comparePassword(password, user.password);
      if (!passwordMatch) throw new Error('authentication error');
      const token = securityService.generateToken(user.email, user._id.toString());
      res.status(200).send({ token });
    } catch (err) {
      res.status(500).send({ error: err.message });
    };
  };
};

export default AuthController;
