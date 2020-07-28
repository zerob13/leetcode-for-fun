/*
 * @lc app=leetcode.cn id=1347 lang=javascript
 *
 * [1347] 制造字母异位词的最小步骤数
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let hash = [];
  for (let i = 0; i < s.length; i++) {
    let at = s.charCodeAt(i) - 97;
    let bt = t.charCodeAt(i) - 97;
    if (hash[at] == undefined) {
      hash[at] = 1;
    } else {
      hash[at]++;
    }
    if (hash[bt] == undefined) {
      hash[bt] = -1;
    } else {
      hash[bt]--;
    }
  }
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    if (hash[i] != 0 && hash[i] != undefined) {
      ans += Math.abs(hash[i]);
    }
  }
  return ans / 2;
};
// @lc code=end
