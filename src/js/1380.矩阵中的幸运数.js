/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let ans = [];
  for (let i = 0; i < matrix.length; i++) {
    let min = matrix[i][0];
    let mj = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (min > matrix[i][j]) {
        min = matrix[i][j];
        mj = j;
      }
    }
    let max = null;
    for (let k = 0; k < matrix.length; k++) {
      if (max == null) {
        max = matrix[k][mj];
      } else if (max < matrix[k][mj]) {
        max = matrix[k][mj];
      }
    }
    if (max == min) {
      ans.push(max);
    }
  }
  return ans;
};
// @lc code=end
