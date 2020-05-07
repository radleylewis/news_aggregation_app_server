import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';

interface ISourceController {
  deploySources(req: Request, res: Response, next: NextFunction): void,
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

interface IArticle extends Document {
  source_id: string,
  name: string,
  author: string,
  title: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
};

interface IResArticle {
  source: {
    id: string,
    name: string,
  },
  author: string,
  title: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
};

type ISourceResponse = {
  status: string,
  sources: ISourceData[],
};

export {
  ISourceController,
  ISourceData,
  ISourceResponse,
  IArticle,
  IResArticle,
};
