const requestPromise = require('request-promise');

import { Source } from '../models';
import { ISourceInterface } from '../interfaces';

const url = `https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API_KEY}`;

requestPromise(url)
  .then((data: string) => JSON.parse(data))
  .then((res: sourceResponse) => Source.insertMany(res.sources))
  .then((res: object) => console.log(res))
  .catch((err: any) => console.log(err));

type sourceResponse = {
  status: string,
  sources: ISourceInterface.ISourceData[],
};
