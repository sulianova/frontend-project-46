import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const fileExt = ['.json'];

const resultStylish = fs.readFileSync(
  path.resolve(process.cwd(), '__tests__/__fixtures__/result_stylish.txt'),
  'utf-8',
);

test.each(fileExt)('testing different file options', (extension) => {
  const fileBefore = `__tests__/__fixtures__/file1${extension}`;
  const fileAfter = `__tests__/__fixtures__/file2${extension}`;
  const actual1 = genDiff(fileBefore, fileAfter, 'stylish');
  expect(actual1).toEqual(resultStylish);
  const actual2 = genDiff(fileBefore, fileAfter);
  expect(actual2).toEqual(resultStylish);
});
