import { Router } from 'express';

import { ISourceInterface } from '../interfaces';

const router = Router();

const sourceRouter = (sourceController: ISourceInterface.ISourceController) => {
  router.get('/', sourceController.listSources);
  return router;
};

export default sourceRouter;
