/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let hash = {};
  if (magazine.length < ransomNote.length) {
    return false;
  }
  for (let i = 0; i < magazine.length; i++) {
    if (hash[magazine[i]] == undefined) {
      hash[magazine[i]] = 1;
    } else {
      hash[magazine[i]]++;
    }
  }
  let isok = true;
  for (let i = 0; i < ransomNote.length; i++) {
    if (hash[ransomNote[i]] == undefined) {
      isok = false;
      break;
    }
    if (hash[ransomNote[i]] > 0) {
      hash[ransomNote[i]] = hash[ransomNote[i]] - 1;
    } else {
      isok = false;
      break;
    }
  }
  return isok;
};
// @lc code=end
