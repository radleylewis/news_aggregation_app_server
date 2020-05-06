# News Aggregator

## Summary

This application simplifies your search for the latest breaking news across 120+ different news sources. Simply select your favourite news sources and your feed will be updated on a minute by minute basis.

##### Note: the associated client frontend is located [here](https://github.com/radleylewis/news_aggregation_app_client.git). (Very basic app in dear need of a refactor - coming soon (to Android)!)

## Getting Started
1. Clone the repository
```bash
$ git clone https://github.com/radleylewis/news_aggregation_app_client.git
$ cd news_aggregation_app_server
```

2. Install required dependencies
```bash
$ npm install
```

3. Set up [News API](https://newsapi.org/)
The news stories for the application are provided by [News API](https://newsapi.org/). In order to run the server please sign up as a developer and obtain your unique `apiKey`.

4. Set up the environment
Create a '.env' file in the main directory ('news_aggregation_app_server/') and fill it in accordingly. An example .env has can be located in the repo. 

5. Run the development Server
```bash
$ npm run dev
```

## Notes

This is purely for learning purposes only. Specifically, I employed the following tools/languages/libraries for practice while building this backend service:
- worker threads
- TypeScript
- Express.js
- Mongoose/MongoDB
- JsonWebTokens
- Bcrypt
- VIM

## Author

Radley Sidwell-Lewis: [Github](https://github.com/radleylewis) & [LinkedIn](https://www.linkedin.com/in/rad-e-sidwell-lewis/)