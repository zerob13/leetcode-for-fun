/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length <= 1 && t.length === s.length) {
    return true;
  }
  if (s.length != t.length) {
    return false;
  }
  var isOk = true
  var hashMap = []
  var hashMap2 = []
  var i = 0
  for (i = 0; i < s.length; i++) {
    var ts = s[i].charCodeAt(0);
    var tb = t[i].charCodeAt(0);
    if (hashMap[ts] == undefined) {
      if (hashMap2[tb] == undefined) {
        hashMap[ts] = tb
        hashMap2[tb] = 1
      } else {
        isOk = false;
        break;
      }
      continue;
    } else {
      if (hashMap[ts] == tb) {
        continue;
      } else {
        isOk = false;
        break;
      }
    }
  }
  return isOk;
};

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('ab', 'aa'))
console.log(isIsomorphic('ab', 'ca'))
