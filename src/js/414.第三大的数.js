/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let m1 = null;
  let m2 = null;
  let m3 = null;
  for (let i = 0; i < nums.length; i++) {
    if (m1 == null) {
      m1 = nums[i];
      i1 = i;
    } else if (m1 < nums[i]) {
      m1 = nums[i];
      i1 = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == m1) {
      continue;
    }
    if (m1 == null) {
      m2 = nums[i];
      i2 = i;
    } else if (m2 < nums[i]) {
      m2 = nums[i];
      i2 = i;
    }
  }
  if (m2 != null) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == m1) {
        continue;
      }
      if (nums[i] == m2) {
        continue;
      }
      if (m3 == null) {
        m3 = nums[i];
        i3 = i;
      } else if (m3 < nums[i]) {
        m3 = nums[i];
        i3 = i;
      }
    }
  }
  if (m3 != null) {
    return m3;
  } else {
    return m1;
  }
};
// @lc code=end
