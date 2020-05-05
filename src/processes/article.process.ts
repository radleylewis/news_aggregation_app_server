import request from 'request-promise';
import net from 'net';

import { Source, Article } from '../models';

const pipe = new net.Socket({ fd: 3 });

const initiateNewsUpdate = async () => {
  pipe.write('News Update: initiated.');
  const sources = await Source.find({});
  for (const source of sources) {
    const url = `${process.env.NEWS_API_URL}sources=${source.id}&${process.env.NEWS_API_KEY}`;
    request(url)
      .then((res) => {
        const DBEntry = {
          sourceID: res.id,
          sourceName: res.name,
          stories: res.articles,
        };
        const article = new Article(DBEntry);
        article.save();
      })
      .catch(err => {
        pipe.write(`News Update: failure for ${source.id}.`)
      })
  };
};

initiateNewsUpdate();
// exports.newsWorker = () => {
//   setInterval(() => { initiateNewsUpdate(); }, +process.env.NEWS_FREQUENCY);
// };

