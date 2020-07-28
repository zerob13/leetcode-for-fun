/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let start = 0;
  let end = s.length - 1;
  let checker = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let pp = s.split("");
  while (start < end) {
    while (start < end && checker.indexOf(pp[start]) < 0) {
      start++;
    }
    while (end > start && checker.indexOf(pp[end]) < 0) {
      end--;
    }
    if (start < end) {
      let t = pp[start];
      pp[start] = pp[end];
      pp[end] = t;
      start++;
      end--;
    }
  }
  return pp.join("");
};
// @lc code=end
