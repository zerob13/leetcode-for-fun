/**
 * @param {number} n
 * @return {boolean}
 */

function doSearch(st, hash) {
  var count = 0;
  for (let i = 0; i < st.length; i++) {
    var it = parseInt(st[i]);
    var ans = it * it;
    count += ans;
  }
  if (count == 1) {
    return true;
  }
  if (hash[count]) {
    return false;
  } else {
    hash[count] = true;
    return doSearch(('' + count).split(''), hash);
  }

}
var isHappy = function (n) {
  let hash = [];
  let st = ('' + n).split('');
  return doSearch(st, hash);
};

export default isHappy;