#!/usr/bin/env node

import { program } from 'commander';
// import version from '../package.json';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .version('1.0.0');

program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<ffilepath1> <filepath2>')
  .option('-f, --format [type]', 'Output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));
  });

program.parse();
