#!/usr/bin/env node
import { cli } from '@custom-elements-manifest/analyzer/cli.js';
import { genVue3Wrapper } from './template/vue3.js';

const res = cli();

const init = async () => {
  const res = await cli();
  console.log(genVue3Wrapper(res));
};

init();
