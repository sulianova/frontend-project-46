#!/usr/bin/env node

import { program } from 'commander';
// import version from '../package.json';

program
  .name('gendiff')
  .version('1.0.0');

program
  .description('Compares two configuration files and shows a difference.');

program.parse();
