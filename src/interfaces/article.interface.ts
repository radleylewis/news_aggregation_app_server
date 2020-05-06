import { Document } from 'mongoose';

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

export {
  IArticle,
  IResArticle,
};