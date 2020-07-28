/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let left = 0;
  let need = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] == "(") {
      left++;
    } else {
      if (left > 0) {
        left--;
      } else {
        need++;
      }
    }
  }
  need += left;
  return need;
};
// @lc code=end
