/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let t = parseInt(n).toString(2).split("").reverse();
  for (let i = t.length; i < 32; i++) {
    t.push("0");
  }
  return parseInt(t.join(""), 2);
};
// @lc code=end
