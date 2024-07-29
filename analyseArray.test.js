const analyseArray = require('./analyseArray');

test('[1,1,1] becomes {average:1, min:1, max:1, length:6}', () => {
  expect(analyseArray([1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 3,
  });
});

test('[8,10,6] becomes {average:8, min:6, max:10, length:3}', () => {
  expect(analyseArray([8, 10, 6])).toEqual({
    average: 8,
    min: 6,
    max: 10,
    length: 3,
  });
});

test('["a","b",6] throws Error "All elements must be numbers', () => {
  expect(() => analyseArray(['a', 'b', 6])).toThrow(Error);
});
