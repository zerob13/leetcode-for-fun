/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let hash = [];
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = true;
  }
  let result = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (!hash[i]) {
      result = i;
      break;
    }
  }
  return result;
};
// @lc code=end
