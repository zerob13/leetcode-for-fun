/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let t = [0, 1, 1];
for (let i = 3; i <= 37; i++) {
  t[i] = t[i - 1] + t[i - 2] + t[i - 3];
}
var tribonacci = function (n) {
  return t[n];
};
// @lc code=end
