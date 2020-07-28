/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let ss = s + s;

  return ss.substr(1, s.length * 2 - 2).indexOf(s) >= 0;
};
// @lc code=end
