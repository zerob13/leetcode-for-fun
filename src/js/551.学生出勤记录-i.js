/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0;
  let cL = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "L") {
      cL++;
    } else {
      cL = 0;
    }
    if (s[i] == "A") {
      countA++;
    }
    if (countA > 1) {
      return false;
    }
    if (cL > 2) {
      return false;
    }
  }
  if (cL > 2 || countA > 1) {
    return false;
  }
  return true;
};
// @lc code=end
