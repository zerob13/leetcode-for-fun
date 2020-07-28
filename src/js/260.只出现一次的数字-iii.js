/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  let check = 1;
  while ((ans & 1) == 0) {
    ans >>= 1;
    check <<= 1;
  }
  let n1 = 0;
  let n2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & check) == 0) {
      n1 = n1 ^ nums[i];
    } else {
      n2 = n2 ^ nums[i];
    }
  }
  return [n1, n2];
};
// @lc code=end
