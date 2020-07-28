/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxResult = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + nums[i - 1] > nums[i]) {
      nums[i] = nums[i] + nums[i - 1];
    }
    if (maxResult < nums[i]) {
      maxResult = nums[i];
    }
  }
  return maxResult;
};
// @lc code=end
