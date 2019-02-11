const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router.js');
const serviceWorker = require('./workers/workers.js');
const config = require('./config/config.js');
const PORT = config.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

require('dotenv').config()

serviceWorker.newsWorker();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // eslint-disable-line
});
