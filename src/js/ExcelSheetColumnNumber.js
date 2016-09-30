/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let val = s[i].charCodeAt(0) - 64;
    count += val * (Math.pow(26, (s.length - 1 - i )));
  }
  return count;
};
export default titleToNumber;