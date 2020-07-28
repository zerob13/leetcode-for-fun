/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let eps = 0.00001;
  if (x <= 0) {
    return 0;
  }
  if (x == 1) {
    return 1;
  }
  let mid, last, low, up;
  low = 0;
  up = x;
  mid = Math.floor((low + up) / 2);
  do {
    if (mid * mid > x) {
      up = mid;
    } else {
      low = mid;
    }
    last = mid;
    mid = Math.floor((up + low) / 2);
  } while (Math.abs(mid - last) > eps);
  return Math.floor(last);
};
// @lc code=end
