/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
let a = ["1", "11", "21", "1211", "111221"];
function getData(n) {
  n = n - 1;
  if (a.length < 30) {
    for (let i = 4; i < 30; i++) {
      let result = "";
      for (let j = 0; j < a[i].length; ) {
        let curNum = a[i][j];
        let endIdx = j + 1;
        let count = 1;
        while (endIdx < a[i].length && a[i][endIdx] == curNum) {
          count++;
          endIdx++;
        }
        result += count + "" + curNum;
        j = endIdx;
      }
      a.push(result);
    }
  }
  return a[n];
}
var countAndSay = function (n) {
  return getData(n);
};
// @lc code=end
