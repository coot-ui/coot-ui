#!/usr/bin/env node
import { wrapperComponent } from './wrapper/index.js';

import { Command } from 'commander';

const program = new Command();

program.name('coot-cli').description('The cli for coot-ui').version('0.0.1');

program
  .command('wrapper <name>')
  .description('create a wrapper of the component for framework.')
  .action((name) => {
    wrapperComponent(name);
  });

program.parse(process.argv);
