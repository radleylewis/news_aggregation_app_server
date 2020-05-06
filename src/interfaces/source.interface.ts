import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';

interface ISourceController {
  deploySources(req: Request, res: Response, next: NextFunction): void,
  addPrefSource(req: Request, res: Response, next: NextFunction): void,
};

interface ISourceData extends Document {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  country: string,
  rating: string,
};

type ISourceResponse = {
  status: string,
  sources: ISourceData[],
};

export {
  ISourceController,
  ISourceData,
  ISourceResponse,
};
