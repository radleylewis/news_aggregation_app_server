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

const getSources = () => {
  const child = spawn(process.execPath, [`${__dirname}/source.process.js`], {
    detached: true,
    stdio: [null, null, null, 'pipe'],
  });
  child.stdio[3].on('data', (data) => {
    if (data.toString() === 'kill') {
      // tslint:disable-next-line:no-console
      console.log('sources process: success, killing child thread.');
      child.kill();
    } else {
      // tslint:disable-next-line:no-console
      console.log(data.toString());
    };
  });
};

export {
  getLatestArticles,
  getSources,
};

