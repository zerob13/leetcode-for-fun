/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let f = [1, 1, 2, 5];
  if (n <= 3) {
    return f[n];
  }
  for (let i = 4; i <= n; i++) {
    f[i] = 0;
    for (let j = 0; j <= (i - 1) / 2; j++) {
      let l = j;
      let r = i - j - 1;
      if (l != r) {
        f[i] += f[l] * f[r] * 2;
      } else {
        f[i] += f[l] * f[r];
      }
    }
  }
  return f[n];
};
// @lc code=end
