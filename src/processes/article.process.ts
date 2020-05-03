const request = require('request');
const net = require('net');
const pipe = new net.Socket({ fd: 3 });

const { Source, Article } = require('../models');

type newsBody = {
  articles: object[],
};

const initiateNewsUpdate = async () => {
  pipe.write('News Update: initiated.');
  const sources = await Source.find({});
  for (let source of sources) {
    const url = `${process.env.NEWS_API_URL}sources=${source.id}&${process.env.NEWS_API_KEY}`;
    const options = { json: true };
    request(url, options, (err: Error, res: Response, newsBody: newsBody) => {
      if (err) {
        pipe.write(`News Update: failure for ${source.id}.`)
      } else {
        const DBEntry = {
          sourceID: source.id,
          sourceName: source.name,
          stories: newsBody.articles,
        };
        Article.save(DBEntry);
      }
    });
  }
};

initiateNewsUpdate();
// exports.newsWorker = () => {
//   setInterval(() => { initiateNewsUpdate(); }, +process.env.NEWS_FREQUENCY);
// };

