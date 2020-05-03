import { Document } from 'mongoose';

interface IArticleData extends Document {
  source_name: string,
  source_id: string,
  content: string,
};

export {
  IArticleData,
};