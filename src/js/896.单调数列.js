/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let p = 0;
  if (A.length <= 1) {
    return true;
  }
  for (let i = 1; i < A.length; i++) {
    if (A[i] == A[i - 1]) {
      continue;
    }
    if (A[i] > A[i - 1]) {
      if (p == 0) {
        p = 1;
      } else if (p != 1) {
        return false;
      }
    } else {
      if (p == 0) {
        p = 2;
      } else if (p != 2) {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
