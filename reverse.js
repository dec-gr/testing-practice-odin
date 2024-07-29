function reverse(string) {
  if (typeof string != 'string') {
    throw new Error('that is not a string!');
  } else {
    const stringSplit = string.split('');
    const reverseArray = stringSplit.reverse();
    return reverseArray.join('');
  }
}

module.exports = reverse;
