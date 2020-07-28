/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLenth = 0;
  for (let i = 0; i < s.length; i++) {
    let hashMap = {};
    let curResult = s[i];
    hashMap[s[i]] = true;
    for (let j = i + 1; j < s.length; j++) {
      if (!hashMap[s[j]]) {
        curResult += s[j];
        hashMap[s[j]] = true;
      } else {
        break;
      }
    }
    if (maxLenth < curResult.length) {
      maxLenth = curResult.length;
    }
  }
  return maxLenth;
};
// @lc code=end
