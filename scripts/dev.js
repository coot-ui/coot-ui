import { exec } from 'child_process';
import chalk from 'chalk';

let litRunning = false;
let vueRunning = false;
let docsRunning = false;

function startCootLitProcess(cb) {
  if (litRunning) {
    return;
  }
  litRunning = true;
  const cootLitProcess = exec('cd ../packages/coot-ui && pnpm build:watch');
  console.log(chalk.blue('start running coot lit...'));
  cootLitProcess.stdout
    ?.on('data', (data) => {
      if (/built\sin\s(\d)+ms\.$/.test(data.trim())) {
        cb();
      }
    })
    .on('close', () => {
      console.log('coot lit process exet');
      process.exit();
    });
  cootLitProcess.stdout?.pipe(process.stdout);
  cootLitProcess.stderr?.pipe(process.stderr);
}

function startCootVueProcess(cb) {
  if (vueRunning) {
    return;
  }
  vueRunning = true;
  const cootVueProcess = exec('cd ../packages/coot-ui-vue && pnpm build:watch');
  console.log(chalk.blue('start running coot vue...'));
  cootVueProcess.stdout
    ?.on('data', (data) => {
      if (/built\sin\s(\d)+ms\.$/.test(data.trim())) {
        cb();
      }
    })
    .on('close', () => {
      console.log('coot vue process exet');
      process.exit();
    });
  cootVueProcess.stdout?.pipe(process.stdout);
  cootVueProcess.stderr?.pipe(process.stderr);
}

function startCootDocsProcess() {
  if (docsRunning) {
    return;
  }
  docsRunning = true;
  const docsProcess = exec('cd ../docs/zh && pnpm docs:dev');
  console.log(chalk.blue('start running coot docs...'));
  docsProcess.stdout?.on('close', () => {
    console.log('coot docs process exet');
    process.exit();
  });
  docsProcess.stdout?.pipe(process.stdout);
  docsProcess.stderr?.pipe(process.stderr);
}

startCootLitProcess(() => startCootVueProcess(startCootDocsProcess));
