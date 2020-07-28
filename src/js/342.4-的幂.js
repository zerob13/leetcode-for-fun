/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (num == 1) {
    return true;
  }
  let str = num.toString(2);
  if (str.length % 2 == 0) {
    return false;
  }
  str = str.substr(1, str.length);
  return parseInt(str, 2) == 0;
};
// @lc code=end
// 4   100
// 16  10000
// 64  1000000
// 256 100000000
