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
    // tslint:disable-next-line:no-console
    console.log(data.toString());
  });
};

export {
  getLatestArticles,
  getSources,
};

// const { spawn } = require('child_process')

// const test = () => {
//     const child = spawn(process.execPath, [`${__dirname}/test.js`], {
//         stdio: [null, null, null, 'pipe'],
//     });

//     child.stdio[3].on('data', function (data) {
//         // tslint:disable-next-line:no-console
//         console.log('hej')
//         console.log(data.toString());
//     });
// }

// exports.default = test()
// //# sourceMappingURL=index.js.map