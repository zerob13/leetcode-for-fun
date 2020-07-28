/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
};
// @lc code=end
