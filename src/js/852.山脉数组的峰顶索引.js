/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  let mi = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[mi] < A[i]) {
      mi = i;
    }
  }
  return mi;
};
// @lc code=end
