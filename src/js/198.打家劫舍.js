/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return nums[0] > nums[1] ? nums[0] : nums[1];
  }
  let f = [nums[0]];
  f[1] = nums[0] > nums[1] ? nums[0] : nums[1];
  for (let i = 2; i < nums.length; i++) {
    let v1 = f[i - 2] + nums[i];
    let v2 = f[i - 1];
    f[i] = v1 > v2 ? v1 : v2;
  }
  return f[nums.length - 1];
};
// @lc code=end
