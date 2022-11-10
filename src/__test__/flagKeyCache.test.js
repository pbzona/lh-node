const FlagKeyCache = require('../flagKeyCache');

test('should initialize with flag key "myFlag"', () => { 
  expect(FlagKeyCache.flagKey).toEqual("myFlag");
})

test('should allow stored flag key to be set', () => { 
  const newValue = 'something'
  FlagKeyCache.flagKey = newValue;
  expect(FlagKeyCache.flagKey).toEqual(newValue);
})