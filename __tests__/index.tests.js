import fs from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const fileExt = ['.json', '.yml'];
const __filename = '__fixtures__/result_stylish.txt';
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each(fileExt)('Stylish: testing different file options.', (extension) => {
  const fileBefore = `${__dirname}/file1${extension}`;
  const fileAfter = `${__dirname}/file2${extension}`;
  const actual1 = genDiff(fileBefore, fileAfter, 'stylish');
  expect(actual1).toEqual(readFile('result_stylish.txt'));
});

test.each(fileExt)('Plain: testing different file options', (extension) => {
  const fileBefore = `${__dirname}/file1${extension}`;
  const fileAfter = `${__dirname}/file2${extension}`;
  const actual2 = genDiff(fileBefore, fileAfter, 'plain');
  expect(actual2).toEqual(readFile('result_plain.txt'));
});

test.each(fileExt)('Json: testing different file options', (extension) => {
  const fileBefore = `${__dirname}/file1${extension}`;
  const fileAfter = `${__dirname}/file2${extension}`;
  const actual2 = genDiff(fileBefore, fileAfter, 'json');
  expect(actual2).toEqual(readFile('result_json.txt'));
});

test.each(fileExt)('Default: testing different file options', (extension) => {
  const fileBefore = `${__dirname}/file1${extension}`;
  const fileAfter = `${__dirname}/file2${extension}`;
  const actual3 = genDiff(fileBefore, fileAfter);
  expect(actual3).toEqual(readFile('result_stylish.txt'));
});
