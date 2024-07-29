const isNumbersCheck = (a, b) => {
  if (!(typeof a === 'number' && typeof b === 'number')) {
    throw new Error('Numbers only please');
  }
};

const add = (a, b) => {
  isNumbersCheck(a, b);
  return a + b;
};

const subtract = (a, b) => {
  isNumbersCheck(a, b);
  return a - b;
};

const divide = (a, b) => {
  isNumbersCheck(a, b);
  return a / b;
};

const multiply = (a, b) => {
  isNumbersCheck(a, b);
  return a * b;
};

const calculator = { add, subtract, divide, multiply };

module.exports = calculator;
