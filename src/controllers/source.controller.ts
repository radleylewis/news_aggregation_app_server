import { Request, Response, NextFunction } from 'express';

import { ISourceInterface } from '../interfaces';

class SourceController implements ISourceInterface.ISourceController {
  deploySources(req: Request, res: Response, next: NextFunction) {
    res.status(200).send('deploy sources');
  };

  addPrefSource(req: Request, res: Response, next: NextFunction) {
    res.status(200).send('added preferred source');
  };
};

export default SourceController;