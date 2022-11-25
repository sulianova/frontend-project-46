#!/usr/bin/env node

import { program } from 'commander';
// import version from '../package.json';

program
  .name('gendiff');

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number');

program.parse();
