import { Schema, model } from 'mongoose';

import { IArticleInterface } from '../interfaces';

const articleSchema: Schema = new Schema({
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

export default model<IArticleInterface.IArticle>('Article', articleSchema);

