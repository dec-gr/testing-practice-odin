// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
// Read more about how a Caesar cipher works.

// Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.

// Don’t forget to test case preservation.
// The shifted lettercase should follow the original lettercase.
// For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.

// Don’t forget to test punctuation.
// Punctuations, spaces, and other non-alphabetical characters should remain unchanged.
// For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
// For this one, you may want to split the final function into a few smaller functions.

// One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones.
// So in this case you only need tests for the final caesarCipher function.
// If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

const cipherClass = require('./cesarCipher');

const cipher = new cipherClass();

test('(abc, 1) becomes bcd', () => {
  expect(cipher.encrypt('abc', 1)).toBe('bcd');
});

test('(abc, 2) becomes cde', () => {
  expect(cipher.encrypt('abc', 2)).toBe('cde');
});

test('(aBc, 2) becomes cDe', () => {
  expect(cipher.encrypt('aBc', 2)).toBe('cDe');
});

test('(xyz, 3) becomes abc', () => {
  expect(cipher.encrypt('xyz', 3)).toBe('abc');
});

test('(a b c, 1) becomes b c d', () => {
  expect(cipher.encrypt('a b c', 1)).toBe('b c d');
});

test('(XYZ, 3) becomes ABC', () => {
  expect(cipher.encrypt('XYZ', 3)).toBe('ABC');
});
