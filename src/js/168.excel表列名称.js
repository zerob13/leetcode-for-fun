/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
let map = [
  "",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var convertToTitle = function (n) {
  let result = "";
  while (n > 26) {
    let i = n % 26;
    if (i > 0) {
      result = map[i] + result;
      n = Math.floor(n / 26);
    } else {
      result = "Z" + result;
      n = n / 26 - 1;
    }
  }
  if (n) {
    result = map[n] + result;
  }
  return result;
};
// @lc code=end
