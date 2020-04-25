import express from 'express';
import dotenv from "dotenv";

/* initialize configuration */
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`server listening on port ${port}`));