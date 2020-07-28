/*
 * @lc app=leetcode.cn id=1079 lang=javascript
 *
 * [1079] 活字印刷
 */

// @lc code=start
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let hash = [];
  for (let i = 0; i < tiles.length; i++) {
    let code = tiles.charCodeAt(i) - 65;
    if (hash[code] == undefined) {
      hash[code] = 0;
    }
    hash[code]++;
  }
  let count = 0;
  let find = function (len) {
    if (len == tiles.length) {
      return;
    }
    for (let i = 0; i < 26; i++) {
      if (hash[i] > 0) {
        hash[i]--;
        count++;
        find(len + 1);
        hash[i]++;
      }
    }
  };
  find(0);
  return count;
};
// @lc code=end
