import { Document } from 'mongoose';

interface IArticle extends Document {
  source_name: string,
  source_id: string,
  content: string,
};

export {
  IArticle,
};