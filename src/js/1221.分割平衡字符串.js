/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let cR = 0;
  let cL = 0;
  let cut = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      cR++;
    }
    if (s[i] == "L") {
      cL++;
    }
    // console.log(cR, cL);
    if (cR == cL && cR != 0) {
      cut++;
      cR = 0;
      cL = 0;
    }
  }
  return cut;
};
// @lc code=end
