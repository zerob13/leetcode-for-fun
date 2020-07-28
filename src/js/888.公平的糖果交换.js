/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < A.length; i++) {
    sumA += A[i];
  }
  for (let i = 0; i < B.length; i++) {
    sumB += B[i];
  }
  if (sumB == sumA) {
    return [];
  }
  let res = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (sumA - A[i] + B[j] == sumB - B[j] + A[i]) {
        res = [A[i], B[j]];
        break;
      }
    }
    if (res.length != 0) {
      break;
    }
  }
  return res;
};
// @lc code=end
