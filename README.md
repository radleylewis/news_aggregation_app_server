# News Aggregator

## Summary

With more than 100 global news sources this application simplifies your search for the latest breaking news. Simply select your favourite news sources and your feed will be updated on a minute by minute basis.

##### Note: The main read-me can me found in the associated client repository [here](https://github.com/radleylewis/news_aggregation_app_client.git)

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
The news stories for the application are provided by [News API](https://newsapi.org/). In order to run the server please sign up as a developer and obtain your unique key.

4. Set up the environment
Create a '.env' file in the main directory ('news_aggregation_app_server/') and fill it in accordingly.
```dotenv
Example:

LOCAL_HOST_PORT=3001

NEWS_API_KEY=//Obtained from News API
NEWS_API_URL=https://newsapi.org/v2/top-headlines?

DATABASE_URL=mongodb://127.0.0.1:27017/
DATABASE_NAME=news_app_db
```
5. Run the development Server
```bash
$ npm serve
```

## Contributing

Any contribution is welcome, just fork the repository and do your thing. Then submit a pull request pointing to this repo.

## License

This project is licensed under the MIT License.

## Author

Radley Sidwell-Lewis: [Github](https://github.com/radleylewis) & [LinkedIn](https://www.linkedin.com/in/rad-e-sidwell-lewis/)
