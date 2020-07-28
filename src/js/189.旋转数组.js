/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  let count = 0;
  for (let i = 0; count < nums.length; i++) {
    let current = i;
    let p = nums[i];
    do {
      let next = (current + k) % nums.length;
      nums[next] = nums[next] ^ p;
      p = nums[next] ^ p;
      nums[next] = nums[next] ^ p;
      current = next;
      count++;
    } while (i != current);
  }
};
// @lc code=end
