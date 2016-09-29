/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  let b = s.split('');
  let len = b.length;
  let i = 0;
  let j = len - 1;
  for (; i < j; i++, j--) {
    let t = b[i];
    b[i] = b[j];
    b[j] = t;
  }
  if (b.length > 0) {
    return b.reduce((pv, cv)=> {
      return pv + cv;
    });
  } else {
    return '';
  }
};
export default reverseString;