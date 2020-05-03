import { spawn } from 'child_process';

const sourceUpdateProcess = spawn(process.execPath, [`${__dirname}/source.process.js`], {
  detached: true,
  stdio: [null, null, null, 'pipe'],
});
sourceUpdateProcess.stdio[3].on('data', (data) => {
  // tslint:disable-next-line:no-console
  console.log(data);
});