import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routeRegistry from './routes';
import { corsConfig } from './utils';

/* initialize configuration */
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.json());

/* set cross origin request configuration */
corsConfig(app);

/* register routes on app */
routeRegistry(app);

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // tslint:disable-next-line:no-console
    console.log(`DB connection established.`);
    return app.listen(port);
  })
  .then(() => {
    // tslint:disable-next-line:no-console
    console.log(`Server listening on port ${port} 🚀`);
  })
  .catch((err: Error) => {
    // tslint:disable-next-line:no-console
    console.error(err);
  });