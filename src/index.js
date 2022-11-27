import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';
import compareData from './compareData.js';
import format from './renders/index.js';

const getAbsolutPath = (filename) => path.resolve(process.cwd(), filename);
const readFile = (filename) => fs.readFileSync(getAbsolutPath(filename), 'utf-8');
const getFormat = (filename) => _.last(filename.split('.'));

const genDiff = (filename1, filename2, formatType = 'stylish') => {
  const data1 = readFile(filename1);
  const data2 = readFile(filename2);
  const parsedFile1 = parse(data1, getFormat(filename1));
  const parsedFile2 = parse(data2, getFormat(filename2));
  const data = compareData(parsedFile1, parsedFile2);

  return format(data, formatType);
};

export default genDiff;
