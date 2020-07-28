/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let ans = [];
  let n = S.length;
  let hash = [];
  for (let i = 0; i + 1 < n; ) {
    if (S[i] == "I") {
      let a1 = null;
      let a2 = null;
      for (let j = 0; j < n; j++) {
        if (!hash[j]) {
          if (!a1) {
            hash[j] = true;
            a1 = j;
          } else {
            hash[j] = true;
            a2 = j;
            break;
          }
        }
      }
      ans[i] = a1;
      ans[i + 1] = a2;
    } else {
      let a1 = null;
      let a2 = null;
      for (let j = n - 1; j >= 0; j--) {
        if (!hash[j]) {
          if (!a1) {
            hash[j] = true;
            a1 = j;
          } else {
            hash[j] = true;
            a2 = j;
            break;
          }
        }
      }
      ans[i] = a1;
      ans[i + 1] = a2;
    }
    i += 2;
  }
  return ans;
};
// @lc code=end
