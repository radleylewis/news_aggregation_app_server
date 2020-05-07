import { Request, Response, NextFunction } from 'express';

import { User } from '../models';
import { IUserInterface } from '../interfaces';

class UserController implements IUserInterface.IUserController {

  async addPrefSource(req: Request, res: Response, next: NextFunction) {
    try {
      const { preferences, username } = req.body as IUserInterface.IUserPreferences;
      const options = { upsert: true };
      await User.findOneAndUpdate({ username }, { preferences }, options);
      res.status(200).send();
    } catch (err) {
      res.status(500).send({ error: err.message });
    };
  };
};

export default UserController;