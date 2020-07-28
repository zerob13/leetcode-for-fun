/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
let f = [0, 1, 1];
for (let i = 3; i <= 30; i++) {
  f[i] = f[i - 1] + f[i - 2];
}
var fib = function (N) {
  return f[N];
};
// @lc code=end
