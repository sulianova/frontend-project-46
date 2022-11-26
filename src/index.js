import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';
import compareData from './compareData.js';
import format from './renders/index.js';

const getAbsolutPath = (fileName) => path.resolve(process.cwd(), fileName);
const readFile = (fileName) => fs.readFileSync(getAbsolutPath(fileName), 'utf-8');
const getFormat = (fileName) => _.last(fileName.split('.'));

const genDiff = (fileName1, fileName2, formatType = 'stylish') => {
  const data1 = readFile(fileName1);
  const data2 = readFile(fileName2);
  const parsedFile1 = parse(data1, getFormat(fileName1));
  const parsedFile2 = parse(data2, getFormat(fileName2));
  const data = compareData(parsedFile1, parsedFile2);

  return format(data, formatType);
};

export default genDiff;
