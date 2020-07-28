/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length;
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return triangle[0][0];
  }
  let result = [[triangle[0][0]]];
  for (let i = 0; i < n; i++) {
    if (!result[i]) {
      result[i] = [];
    }
    for (let j = 0; j < triangle[i].length; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      let max = null;
      if (i - 1 >= 0) {
        if (j < triangle[i - 1].length) {
          let temp = result[i - 1][j] + triangle[i][j];
          if (max == null || max > temp) {
            max = temp;
          }
        }
        if (j - 1 >= 0 && j - 1 < triangle[i - 1].length) {
          let temp = result[i - 1][j - 1] + triangle[i][j];
          if (max == null || max > temp) {
            max = temp;
          }
        }
      }

      result[i][j] = max;
    }
  }
  let max = result[n - 1][0];
  for (let i = 0; i < n; i++) {
    if (max > result[n - 1][i]) {
      max = result[n - 1][i];
    }
  }
  return max;
};
// @lc code=end
