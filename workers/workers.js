const request = require('request');
const mongoSetup = require('../models/mongosetupUserData.js');
const baseURL = 'https://newsapi.org/v2/top-headlines?';
const apiKey = 'apiKey=30e8f2b5af1b4b8185a3159ece2a9269';

const initiateNewsUpdate = async () => {
  // let singleSource = {};
  // const sourceList = await mongoSetup.getSourceList();
  // for (let source of sourceList) {
  //   request(baseURL + `sources=${source.id}&` + apiKey, { json: true }, (err, res, body) => {
  //     if (err) {
  //       return console.log('Error with fetching news :(', err);
  //     } else {
  //       singleSource = {
  //         sourceID: source.id,
  //         sourceName: source.name,
  //         stories: body.articles,
  //       };
  //       mongoSetup.placeArticles(singleSource);
  //     }
  //   })
  // }
}

exports.newsWorker = () => {
  initiateNewsUpdate();
  // setInterval(() => { updateNews() }, 300000);
};
