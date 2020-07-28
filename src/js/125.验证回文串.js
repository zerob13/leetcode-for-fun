/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.trim().length === 0) {
    return true;
  }
  s = s.toLocaleLowerCase().trim();
  let start = 0;
  let end = s.length;
  let isOK = true;
  re = /^[0-9a-zA-Z]*$/g;
  while (start < end && isOK) {
    while (!re.test(s[start]) && start < end) {
      start++;
    }
    while (!re.test(s[end]) && start < end) {
      end--;
    }
    if (s[start] != s[end]) {
      isOK = false;
    }
  }
  return isOK;
};
// @lc code=end
