/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let temp = "";
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      if (temp.length > 0) {
        ans += temp.split("").reverse().join("");
        temp = "";
      }
      ans += s[i];
      continue;
    } else {
      temp += s[i];
    }
  }
  if (temp.length > 0) {
    ans += temp.split("").reverse().join("");
  }
  return ans;
};
// @lc code=end
