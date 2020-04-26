import { Schema, model } from 'mongoose';

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

export default model('Article', articleSchema);

