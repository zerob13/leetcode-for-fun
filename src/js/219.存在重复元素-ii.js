/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hash = [];
  let isOk = false;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (hash[val] != undefined) {
      if (Math.abs(i - hash[val]) <= k) {
        isOk = true;
        break;
      } else {
        hash[val] = i;
      }
    } else {
      hash[val] = i;
    }
  }
  return isOk;
};
// @lc code=end
