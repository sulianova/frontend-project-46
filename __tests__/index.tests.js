import fs from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const fileExt = ['.json', '.yml'];
const __filename = '__fixtures__/result_stylish.txt';
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each(fileExt)('Testing different file options', (extension) => {
  const fileBefore = `${__dirname}/file1${extension}`;
  const fileAfter = `${__dirname}/file2${extension}`;
  expect(genDiff(fileBefore, fileAfter, 'stylish')).toEqual(readFile('result_stylish.txt'));
  expect(genDiff(fileBefore, fileAfter, 'plain')).toEqual(readFile('result_plain.txt'));
  expect(genDiff(fileBefore, fileAfter, 'json')).toEqual(readFile('result_json.txt'));
  expect(genDiff(fileBefore, fileAfter)).toEqual(readFile('result_stylish.txt'));
});