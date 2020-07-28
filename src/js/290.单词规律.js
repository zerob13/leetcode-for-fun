/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let hash = {};
  let hash2 = {};
  let pS = str.split(" ");
  if (pS.length != pattern.length) {
    return false;
  }
  let isOK = true;
  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] == undefined) {
      hash[pattern[i]] = pS[i];
    } else if (hash[pattern[i]] != pS[i]) {
      isOK = false;
      break;
    }
    if (hash2[pS[i]] == undefined) {
      hash2[pS[i]] = pattern[i];
    } else if (hash2[pS[i]] != pattern[i]) {
      isOK = false;
      break;
    }
  }
  return isOK;
};
// @lc code=end
