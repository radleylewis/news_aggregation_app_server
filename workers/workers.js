const request = require('request');
const config = require('../config/config.js');
const mongoDB = require('../models/database/mongoDB.js');

const initiateNewsUpdate = async () => {
  let singleSource = {};
  const sourceList = await mongoDB.getSourceList();
  for (let source of sourceList) {
    request(config.baseURL + `sources=${source.id}&` + config.apiKey, { json: true }, (err, res, body) => {
      if (err) {
        return console.log('Error with fetching news :(', err);
      } else {
        singleSource = {
          sourceID: source.id,
          sourceName: source.name,
          stories: body.articles,
        };
        mongoDB.placeArticles(singleSource);
      }
    })
  }
}

exports.newsWorker = () => {
  // setInterval(() => { updateNews() }, config.updateInterval);
};
