/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let up = 0;
  digits[digits.length - 1] += 1;
  for (j = digits.length - 1; j >= 0; j--) {
    digits[j] += up;
    if (digits[j] >= 10) {
      digits[j] -= 10;
      up = 1;
    } else {
      up = 0;
      break;
    }
  }
  if (up > 0) {
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end
