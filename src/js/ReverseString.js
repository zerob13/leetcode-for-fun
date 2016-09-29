/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  var b = '';
  for (let i = s.length - 1; i >= 0; i--) {
    b += s[i];
  }
  return b;
};
export default reverseString;