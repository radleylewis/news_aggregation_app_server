import { Request, Response, NextFunction } from 'express';

import { User } from '../models';
import { ISourceInterface } from '../interfaces';

class SourceController implements ISourceInterface.ISourceController {
  deploySources(req: Request, res: Response, next: NextFunction) {
    res.status(200).send('deploy sources');
  };

  async addPrefSource(req: Request, res: Response, next: NextFunction) {
    try {
      const { preferences, username } = req.body as ISourceInterface.ISourcePreferences;
      const options = { upsert: true };
      await User.findOneAndUpdate({ username }, { preferences }, options);
      res.status(200).send();
    } catch (err) {
      res.status(500).send({ error: err.message });
    };
  };
};

export default SourceController;