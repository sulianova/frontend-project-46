import fs from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const fileExt = ['.json', '.yml'];
const __filename = '__fixtures__/result_stylish.txt';
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultStylish = fs.readFileSync(getFixturePath('result_stylish.txt'), 'utf-8');

test.each(fileExt)('testing different file options', (extension) => {
  const fileBefore = `${__dirname}/file1${extension}`;
  const fileAfter = `${__dirname}/file2${extension}`;
  const actual1 = genDiff(fileBefore, fileAfter, 'stylish');
  expect(actual1).toEqual(resultStylish);
  const actual2 = genDiff(fileBefore, fileAfter);
  expect(actual2).toEqual(resultStylish);
});
