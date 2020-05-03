import { Schema, model } from 'mongoose';

import { IArticleInterface } from '../interfaces';

const articleSchema = new Schema({
  source_name: {
    type: String,
  },
  source_id: {
    type: String,
  },
  content: {
    type: String,
  }
});

export default model<IArticleInterface.IArticleData>('Article', articleSchema);

