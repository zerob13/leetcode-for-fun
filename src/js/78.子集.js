/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]];
  for (let i = nums.length - 1; i >= 0; i--) {
    let len = result.length;
    for (let j = 0; j < len; j++) {
      let nItem = [...result[j]];
      nItem.push(nums[i]);
      result.push(nItem);
    }
  }
  return result;
};
// @lc code=end
