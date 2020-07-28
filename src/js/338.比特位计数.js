/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let res = [0];
  for (let i = 0; i <= num; i++) {
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
};
// @lc code=end
