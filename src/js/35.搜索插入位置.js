/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length == 0) {
    return 0;
  }
  let curIdx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      curIdx = i;
      break;
    }
  }
  if (curIdx == -1) {
    curIdx = nums.length;
  }
  return curIdx;
};
// @lc code=end
