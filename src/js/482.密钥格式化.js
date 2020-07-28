/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  let s = S.split("-").join("").split("");
  s.reverse();
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[i].toLocaleUpperCase());
    if ((i + 1) % K == 0) {
      result.push("-");
    }
  }
  result.reverse();
  if (result[0] == "-") {
    result.shift();
  }
  return result.join("");
};
// @lc code=end
