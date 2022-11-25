#!/usr/bin/env node

import { program } from 'commander';
// import version from '../package.json';

program
  .name('gendiff')
  .version('1.0.0');

program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<ffilepath1> <filepath2>')
  .option('-f, --format [type]', 'Output format', 'stylish');

program.parse();
