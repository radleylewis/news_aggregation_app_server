import request from 'request-promise';
import { Socket } from 'net';
import { connect } from 'mongoose';

import { Source, Article } from '../models';
import { ISourceInterface } from '../interfaces';

const pipe = new Socket({ fd: 3 });

const _fetchSourceArticles = (id: string) => {
  const uri = `${process.env.NEWS_API_URL}/v2/top-headlines?sources=${id}&apiKey=${process.env.NEWS_API_KEY}`;
  request({ uri, json: true })
    .then(res => {
      const articleBatch = res.articles.map((article: ISourceInterface.IResArticle) => (
        ({ source, ...residual }) => ({ ...residual, source_id: source.id, source: source.name }))(article)
      );
      return Article.insertMany(articleBatch);
    })
    .catch(err => {
      pipe.write(`article process: failure fetching articles for ${id} with ${err.message}`);
    });
};

connect(process.env.DATABASE)
  .then(() => {
    pipe.write('article process: db connection established');
    return Source.find({});
  })
  .then(sources => {
    pipe.write('article process: success fetching sources');
    setInterval(() => {
      sources.forEach(source => _fetchSourceArticles(source.id));
      pipe.write('article process: article update cycle complete. Waiting for next cycle... ');
    }, +process.env.NEWS_FREQUENCY);
  })
  .catch(err => {
    pipe.write(`article process: failure with error ${err.message}`)
  });

