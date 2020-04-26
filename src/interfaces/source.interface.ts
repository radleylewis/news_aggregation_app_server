import { Request, Response, NextFunction } from 'express';

interface ISourceController {
  deploySources(req: Request, res: Response, next: NextFunction): void,
  addPrefSource(req: Request, res: Response, next: NextFunction): void,
};

export default ISourceController;
