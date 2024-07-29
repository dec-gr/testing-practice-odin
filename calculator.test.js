const calculator = require('./calculator');

test('Calculator is defined', () => {
  expect('./calculator').toBeDefined();
});

test('1 + 1 = 2', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('11 + 1 = 13', () => {
  expect(calculator.add(11, 2)).toBe(13);
});

test('11 - 1 = 10', () => {
  expect(calculator.subtract(11, 1)).toBe(10);
});

test('11 - 5 = 6', () => {
  expect(calculator.subtract(11, 5)).toBe(6);
});

test('12 / 2 = 6', () => {
  expect(calculator.divide(12, 2)).toBe(6);
});

test('6 / 2 = 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('6 * 2 = 12', () => {
  expect(calculator.multiply(6, 2)).toBe(12);
});

test('6 * 4 = 24', () => {
  expect(calculator.multiply(6, 4)).toBe(24);
});

test('add(one, two) throws error "Numbers only please"', () => {
  expect(() => calculator.add('one', 'two')).toThrow('Numbers only please');
});

test('multiply(one, two) throws error "Numbers only please"', () => {
  expect(() => calculator.multiply('one', 'two')).toThrow(
    'Numbers only please'
  );
});

test('subtract(one, two) throws error "Numbers only please"', () => {
  expect(() => calculator.subtract('one', 'two')).toThrow(
    'Numbers only please'
  );
});

test('divide(one, two) throws error "Numbers only please"', () => {
  expect(() => calculator.divide('one', 'two')).toThrow('Numbers only please');
});
