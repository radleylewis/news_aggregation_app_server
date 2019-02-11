require('dotenv').config()

const PORT = process.env.LOCAL_HOST_PORT;
const baseURL = process.env.NEWS_API_URL;
const apiKey = 'apiKey=' + process.env.API_KEY;
const mongoAddress = process.env.DATABASE_URL + process.env.DATABASE_NAME;
const updateInterval = 60000 * 60 * 6; // 6 hourly updates can be altered accordingly. Note: API is limited.

module.exports = {
	PORT,
	baseURL,
	apiKey,
	mongoAddress,
	updateInterval,
};
