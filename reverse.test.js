const reverse = require('./reverse');

test('reverse is defined', () => {
  expect(() => require('./reverse')).toBeDefined();
});

test('hello becomes olleh', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('world becomes dlrow', () => {
  expect(reverse('world')).toBe('dlrow');
});

test('Hello World becomes dlroW olleH', () => {
  expect(reverse('Hello World')).toBe('dlroW olleH');
});

test('12 throws error "that is not a string"', () => {
  expect(() => reverse(12)).toThrow(Error);
});
