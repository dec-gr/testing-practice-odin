const capitalise = require('./capitalise');

test('Capitalise is defined', () => {
  expect(() => require('./capitalise')).toBeDefined();
});

test('hello becomes Hello', () => {
  expect(capitalise('hello')).toMatch(/Hello/);
});

test('world becomes World', () => {
  expect(capitalise('world')).toMatch(/World/);
});

test('HELLO becomes HELLO', () => {
  expect(capitalise('HELLO')).toMatch(/HELLO/);
});

test('1234 becomes 1234', () => {
  expect(capitalise('1234')).toMatch(/1234/);
});
