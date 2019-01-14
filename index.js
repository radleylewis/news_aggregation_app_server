const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router.js');
const serviceWorker = require('./workers/workers.js')
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

serviceWorker.newsWorker();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
