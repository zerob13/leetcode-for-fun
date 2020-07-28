/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == undefined) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }
  let len = 0;
  let isPo = false;
  let keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i++) {
    if (hash[keys[i]] % 2 == 0) {
      len += hash[keys[i]];
    } else if (hash[keys[i]] > 2) {
      isPo = true;
      len += hash[keys[i]] - 1;
    } else {
      isPo = true;
    }
  }
  if (isPo) {
    len++;
  }
  return len;
};
// @lc code=end
