import { Schema, model } from 'mongoose';

import { ISourceInterface } from '../interfaces';

const sourceSchema: Schema = new Schema({
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
});

export default model<ISourceInterface.ISourceData>('Source', sourceSchema);
