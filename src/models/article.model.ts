import { Schema, model } from 'mongoose';

import { ISourceInterface } from '../interfaces';

const articleSchema: Schema = new Schema({
  source_id: { type: String, required: true },
  source: { type: String, required: true },
  author: String,
  title: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

export default model<ISourceInterface.IArticle>('Article', articleSchema);

