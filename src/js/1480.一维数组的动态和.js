/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = 0; j < i; j++) {
      sum += nums[j];
    }
    result.push(sum);
  }
  return result;
};
// @lc code=end
