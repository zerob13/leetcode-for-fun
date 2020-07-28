/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  let hash = [];
  let ans = A[0];
  for (let i = 0; i < A.length; i++) {
    if (hash[A[i]] == undefined) {
      hash[A[i]] = 1;
    } else {
      hash[A[i]] += 1;
    }
    if (hash[A[i]] == A.length / 2) {
      ans = A[i];
    }
  }
  return ans;
};
// @lc code=end
