/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let lastIdx = -1;
  if (!needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let ok = true;
      for (let j = 1; j < needle.length; j++) {
        if (needle[j] != haystack[i + j]) {
          ok = false;
          break;
        }
      }
      if (ok) {
        lastIdx = i;
        break;
      }
    }
  }
  return lastIdx;
};
// @lc code=end
