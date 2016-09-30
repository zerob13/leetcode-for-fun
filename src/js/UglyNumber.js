/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) {
    return false;
  }
  if (num == 1) {
    return true;
  }
  for (; num % 5 == 0 || num % 3 == 0 || num % 2 == 0;) {
    if (num % 5 == 0) {
      num = num / 5;
    }
    if (num % 3 == 0) {
      num = num / 3;
    }
    if (num % 2 == 0) {
      num = num / 2;
    }
  }
  return (num % 2 == 0) || (num % 3 == 0) || (num % 5 == 0) || num == 1;
};