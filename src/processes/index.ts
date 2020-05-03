import { spawn } from 'child_process';

const getLatestArticles = () => {
  const latestArticlesProcess = spawn(process.execPath, [`${__dirname}/article.process.js`], {
    detached: true,
    stdio: [null, null, null, 'pipe'],
  });
  latestArticlesProcess.stdio[3].on('data', (data) => {
    // tslint:disable-next-line:no-console
    console.log(data);
  });
};

export {
  getLatestArticles,
};