import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routeRegistry from './routers';
import { cors, catchErrors } from './middleware';
import { getSources, getLatestArticles } from './processes';

/* initialize configuration */
dotenv.config();

/* fetch sources and insert to db */
if (+process.env.SET_SOURCES) getSources();

/* initiated dedicated article fetch thread */
// getLatestArticles();

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.json());

/* set cross origin request configuration */
cors(app);

/* register routes on app */
routeRegistry(app);

/* catch and handler errors */
catchErrors(app);

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // tslint:disable-next-line:no-console
    console.log(`main process: db connection established`);
    return app.listen(port);
  })
  .then(() => {
    // tslint:disable-next-line:no-console
    console.log(`main process: server listening on port ${port} 🚀`);
  })
  .catch((err: Error) => {
    // tslint:disable-next-line:no-console
    console.error(`main process: server failure: ${err.message}`);
  });