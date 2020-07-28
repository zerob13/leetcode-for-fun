/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let ss = s.split("");
  let lsum = 0;
  let rsum = 0;
  for (let i = 0; i < ss.length; i++) {
    rsum += parseInt(ss[i]);
  }
  let max = null;
  for (let i = 0; i < ss.length - 1; i++) {
    let t = parseInt(ss[i]);
    if (t == 1) {
      rsum -= 1;
    } else {
      lsum += 1;
    }
    if (max == null || max < lsum + rsum) {
      max = lsum + rsum;
    }
  }
  return max;
};
// @lc code=end
