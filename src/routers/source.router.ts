import { Router } from 'express';

import { ISourceInterface } from '../interfaces';

const sourceRouter = (sourceController: ISourceInterface.ISourceController) => {
  const router = Router();
  router.get('/', sourceController.deploySources);
  return router;
};

export default sourceRouter;
