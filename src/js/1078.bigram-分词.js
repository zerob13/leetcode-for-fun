/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let arr = text.split(" ");
  let result = [];
  for (let i = 0; i + 2 < arr.length; ) {
    if (arr[i] != first) {
      i++;
    } else if (arr[i + 1] != second) {
      i++;
    } else {
      result.push(arr[i + 2]);
      i = i + 2;
    }
  }
  return result;
};
// @lc code=end
