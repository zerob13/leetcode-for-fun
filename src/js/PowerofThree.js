/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 0) {
    return false;
  }
  if (n == 1) {
    return true;
  }
  if (n == 2 || n == 0) {
    return false;
  }
  if (n == 3) {
    return true;
  }
  for (; n > 3; n = n / 3);
  if (n % 3 == 0) {
    return true;
  }
  return false;
};