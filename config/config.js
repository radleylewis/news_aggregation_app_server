const PORT = 3001;
const baseURL = 'https://newsapi.org/v2/top-headlines?';
const apiKey = 'apiKey=30e8f2b5af1b4b8185a3159ece2a9269';
const mongoAddress = "mongodb://127.0.0.1:27017/news_app_db";
const updateInterval = 60000 * 60 * 6;

module.exports = {
  PORT,
  baseURL,
  apiKey,
  mongoAddress,
}
