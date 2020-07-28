/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let up = 0;
  if (a.length > b.length) {
    let t = a;
    a = b;
    b = t;
  }
  a = a.split("").reverse();
  b = b.split("").reverse();
  for (let i = 0; i < b.length; i++) {
    if (!a[i]) {
      a[i] = 0;
    }
    let l1 = parseInt(a[i]);
    let l2 = parseInt(b[i]);
    let temp = l1 + l2 + up;
    up = 0;
    if (temp == 2) {
      up = 1;
      b[i] = 0;
    }
    if (temp == 0) {
      up = 0;
      b[i] = 0;
    }
    if (temp == 1) {
      up = 0;
      b[i] = 1;
    }
    if (temp == 3) {
      up = 1;
      b[i] = 1;
    }
  }
  if (up) {
    b.push("1");
  }
  return b.reverse().join("");
};
// @lc code=end
