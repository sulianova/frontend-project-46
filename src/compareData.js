import _ from 'lodash';

const sortKeys = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  return _.sortBy(_.union(keys1, keys2));
};

const makeObj = (key, type, value, children, valueBefore, valueAfter) => ({
  key,
  type,
  value,
  children,
  valueBefore,
  valueAfter,
});

const compareData = (obj1, obj2) => {
  const sortedKeys = sortKeys(obj1, obj2);

  const result = sortedKeys.map((key) => {
    const obj = makeObj(key);
    switch (true) {
      case (!_.has(obj1, key)):
        return { ...obj, type: 'added', value: obj2[key] };
      case (!_.has(obj2, key)):
        return { ...obj, type: 'deleted', value: obj1[key] };
      case (_.isObject(obj1[key]) && _.isObject(obj2[key])):
        return { ...makeObj(key, 'nested'), children: compareData(obj1[key], obj2[key]) };
      case (obj1[key] !== obj2[key]):
        return { ...makeObj(key, 'changed'), valueBefore: obj1[key], valueAfter: obj2[key] };
      default:
        return { ...obj, type: 'unchanged', value: obj1[key] };
    }
  });
  return result;
};

export default compareData;
