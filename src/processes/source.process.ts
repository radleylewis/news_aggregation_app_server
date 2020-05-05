import request from 'request-promise';
import { Socket } from 'net';
import { connect } from 'mongoose';

import { Source } from '../models';
import { ISourceInterface } from '../interfaces';

const pipe = new Socket({ fd: 3 });

const uri = `${process.env.NEWS_API_URL}v2/sources?apiKey=${process.env.NEWS_API_KEY}`;

connect(process.env.DATABASE)
  .then(() => {
    pipe.write('sources process: db connection established')
    return request({ uri, json: true });
  })
  .then(({ sources }: sourceResponse) => {
    pipe.write('sources process: success on API request');
    return Source.insertMany(sources);
  })
  .then((data) => {
    pipe.write(`sources process: success inserting ${data.length} entries to db`);
    pipe.write('kill');
  })
  .catch((err) => {
    pipe.write(`sources process: failure with error ${err.message}`)
  });

type sourceResponse = {
  status: string,
  sources: ISourceInterface.ISourceData[],
};
