/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((x, y) => {
    return y - x;
  });
  return (nums[0] - 1) * (nums[1] - 1);
};
// @lc code=end
