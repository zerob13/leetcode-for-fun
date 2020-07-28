/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let c = 0;
  let a = num1;
  let b = num2;
  let result = [];
  if (a.length > b.length) {
    let t = a;
    a = b;
    b = t;
  }
  for (let i = a.length - 1; i >= 0; i--) {
    // console.log(i, b.length - a.length + i);
    let tR = parseInt(a[i]) + parseInt(b[b.length - a.length + i]) + c;
    // console.log(tR);
    if (tR >= 10) {
      c = 1;
      tR -= 10;
    } else {
      c = 0;
    }
    result[b.length - a.length + i] = tR;
  }
  // console.log(b);
  let start = b.length - a.length - 1;
  while (c > 0) {
    if (start < 0) {
      result.unshift("1");
      c = 0;
    } else {
      let tR = parseInt(b[start]) + c;
      if (tR >= 10) {
        tR -= 10;
        c = 1;
      } else {
        c = 0;
      }
      result[start] = tR;
      start--;
    }
  }
  while (start >= 0) {
    result[start] = b[start];
    start--;
  }
  return result.join("");
};
// @lc code=end
