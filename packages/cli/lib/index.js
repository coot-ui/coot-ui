#!/usr/bin/env node
import { cli } from '@custom-elements-manifest/analyzer/cli.js';
import { createComponent } from './create/index.js';

import { Command } from 'commander';

const program = new Command();

program.name('coot-cli').description('The cli for coot-ui').version('0.0.1');

program
  .command('wrapper <name>')
  .description('Create wrapper for the component')
  .action((name) => {
    createComponent(name);
  });

program.parse(process.argv);

// const res = cli();

// const init = async () => {
//   const res = await cli();
//   console.log(genVue3Wrapper(res));
// };

// init();
