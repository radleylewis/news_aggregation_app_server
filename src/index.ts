import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routeRegistry from './routers';
import { cors, catchErrors } from './middleware';
import { getSources, getLatestArticles } from './processes';

/* initialize configuration */
dotenv.config();

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
    console.log(`DB connection established.`);
    return app.listen(port);
  })
  .then(() => {
    /* fetch source data */
    getSources();
    // tslint:disable-next-line:no-console
    console.log(`Server listening on port ${port} 🚀`);
  })
  .catch((err: Error) => {
    // tslint:disable-next-line:no-console
    console.error(`Server failure: ${err.message}`);
  });