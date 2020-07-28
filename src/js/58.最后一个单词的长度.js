/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.split(" ");
  let ans = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i].trim().length) {
      ans = s[i].trim().length;
      break;
    }
  }
  return ans;
};
// @lc code=end
