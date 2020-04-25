import express from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
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

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`server listening on port ${port} 🚀`));