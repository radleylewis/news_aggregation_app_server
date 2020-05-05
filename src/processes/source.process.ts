import request from 'request-promise';
import { Socket } from 'net';

import { Source } from '../models';
import { ISourceInterface } from '../interfaces';

const pipe = new Socket({ fd: 3 });

const url = `https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API_KEY}`;

pipe.write('Child Process: "sources" initiated...');

request(url)
  .then((res: sourceResponse) => {
    pipe.write('sources: success on API request');
    return new Source.insertMany(res.sources);
  })
  .then((data) => {
    // tslint:disable-next-line:no-console
    pipe.write('sources: success on DB insert');
    pipe.write(JSON.stringify(data));
  })
  .catch((err: Error) => {
    // tslint:disable-next-line:no-console
    pipe.write(`Sources Fetch: failure with error ${err.message}`)
  });

type sourceResponse = {
  status: string,
  sources: ISourceInterface.ISourceData[],
};
