function analyseArray(array) {
  array.forEach((element) => {
    if (typeof element != 'number') {
      throw new Error('All elements must be numbers');
      return;
    }
  });
  const sum = array.reduce((prev, curr) => prev + curr, 0);
  const lengthVar = array.length;
  const averageVar = sum / lengthVar;
  const maxVar = Math.max(...array);
  const minVar = Math.min(...array);
  return { average: averageVar, min: minVar, max: maxVar, length: lengthVar };
}

module.exports = analyseArray;
