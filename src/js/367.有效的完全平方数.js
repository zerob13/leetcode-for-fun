/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let isPS = function (start, end) {
    // console.log(start, end);
    if (start == end || start + 1 == end) {
      return start * start == num || end * end == num;
    }
    let mid = Math.floor((start + end) / 2);
    if (mid * mid == num) {
      return true;
    }
    if (mid * mid > num) {
      return isPS(start, mid - 1);
    } else {
      return isPS(mid + 1, end);
    }
  };
  if (num < 0) {
    return false;
  }
  if (num == 1 || num == 0) {
    return true;
  }
  return isPS(1, Math.round(num / 2));
};
// @lc code=end
