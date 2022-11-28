import _ from 'lodash';

const sorteKeys = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  return _.sortBy(_.union(keys1, keys2));
};

const setKeyType = (key, obj1, obj2) => {
  if (!_.has(obj1, key)) return 'added';
  if (!_.has(obj2, key)) return 'deleted';
  if (obj1[key] !== obj2[key]) return 'changed';
  if (_.isObject(obj1[key]) && _.isObject(obj2[key])) return 'nested';
  return 'unchanged';
};

const compareData = (obj1, obj2) => {
  const sortedKeys = sorteKeys(obj1, obj2);

  const result = sortedKeys.map((key) => {
    const keyType = setKeyType(key, obj1, obj2);
    switch (keyType) {
      case 'added':
        return {
          key,
          value: obj2[key],
          type: 'added',
        };
      case 'deleted':
        return {
          key,
          value: obj1[key],
          type: 'deleted',
        };
      case 'nested':
        return {
          key,
          type: 'nested',
          children: compareData(obj1[key], obj2[key]),
        };
      case 'changed':
        return {
          key,
          valueBefore: obj1[key],
          valueAfter: obj2[key],
          type: 'changed',
        };
      case 'unchanged':
        return {
          key,
          value: obj1[key],
          type: 'unchanged',
        };
      default:
        throw new Error(`${keyType} is not supported`);
    }
  });

  return result;
};

export default compareData;