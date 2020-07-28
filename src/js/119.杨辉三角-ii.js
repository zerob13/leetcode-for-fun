/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var factorial = function fac(num) {
    if (num <= 1) {
      return 1;
    } else {
      return num * fac(num - 1);
    }
  };
  let getVal = function (n, m) {
    return factorial(n - 1) / (factorial(m - 1) * factorial(n - m));
  };
  let result = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    result.push(getVal(rowIndex + 1, i + 1));
  }
  return result;
};
// @lc code=end
