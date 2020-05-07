import { Request, Response, NextFunction } from 'express';

import { User } from '../models';
import { IUserInterface } from '../interfaces';

class UserController implements IUserInterface.IUserController {

  /* METHOD: add user preferred sources */
  async addPrefSource(req: Request, res: Response, next: NextFunction) {
    try {
      const { preferences, username } = req.body as IUserInterface.IUserPreferences;
      const options = { upsert: true };
      await User.findOneAndUpdate({ username }, { preferences }, options);
      res.status(200).send();
    } catch (err) {
      next(err);
    };
  };
};

export default UserController;