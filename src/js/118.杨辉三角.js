/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 0) {
    return [];
  }
  if (numRows == 1) {
    return [[1]];
  }
  let result = [[1]];
  for (let i = 1; i < numRows; i++) {
    result.push([]);
    for (let j = 0; j < result[i - 1].length + 1; j++) {
      if (j == 0 || j == result[i - 1].length) {
        result[i].push(1);
      } else {
        result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
  }
  return result;
};
// @lc code=end
