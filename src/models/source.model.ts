import { Schema, model } from 'mongoose';

const sourceSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  category: {
    type: String,
  },
  country: {
    type: String,
  },
  language: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Article',
    }
  ]

});

export default model('Source', sourceSchema);
