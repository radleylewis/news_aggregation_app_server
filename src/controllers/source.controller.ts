import { Request, Response, NextFunction } from 'express';

import { Source } from '../models';
import { ISourceInterface } from '../interfaces';

class SourceController implements ISourceInterface.ISourceController {

  /* METHOD: list sources incl. data on sources */
  async listSources(req: Request, res: Response, next: NextFunction) {
    try {
      const sourceList = await Source.find({});
      res.status(200).send(sourceList);
    } catch (err) {
      next(err);
    };
  };
};

export default SourceController;