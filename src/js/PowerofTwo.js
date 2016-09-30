/**
 * @param {number} n
 * @return {boolean}
 */
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
var isPowerOfTwo = function (n) {
  if (n < 0) {
    return false;
  }
  let st = dec2bin(n);
  if (st[0] != '1') {
    return false;
  }
  for (let i = 1; i < st.length; i++) {
    if (st[i] == '1') {
      return false;
    }
  }
  return true;
};