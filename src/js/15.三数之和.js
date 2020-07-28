/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((x, y) => {
    return x - y;
  });
  // console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let kstart = nums.length - 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      while (kstart > j && nums[kstart] + nums[j] + nums[i] > 0) {
        kstart--;
      }
      if (kstart == j) {
        break;
      }
      if (nums[i] + nums[kstart] + nums[j] == 0) {
        // console.log(i, j, k);
        result.push([nums[i], nums[kstart], nums[j]]);
      }
    }
  }
  return result;
};
// @lc code=end
