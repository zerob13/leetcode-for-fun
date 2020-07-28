/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let ss = s.split(" ");
  let count = 0;
  for (let i = 0; i < ss.length; i++) {
    if (ss[i].trim().length > 0) {
      count++;
    }
  }
  return count;
};
// @lc code=end
