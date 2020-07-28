/*
 * @lc app=leetcode.cn id=861 lang=javascript
 *
 * [861] 翻转矩阵后的得分
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] == 0) {
      for (let j = 0; j < A[i].length; j++) {
        A[i][j] = A[i][j] == 0 ? 1 : 0;
      }
    }
  }
  for (let i = 1; i < A[0].length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j][i] == 0) {
        count++;
      }
    }
    if (count > A.length - count) {
      for (let j = 0; j < A.length; j++) {
        A[j][i] = A[j][i] == 0 ? 1 : 0;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let t = A[i].join("");
    sum += parseInt(t, 2);
  }
  return sum;
};
// @lc code=end
