/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (a == 0) return b;
  if (b == 0) return a;

  while (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};


export default getSum;
