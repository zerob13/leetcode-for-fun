/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let findAns = function (start, end) {
    // console.log(start, end);
    if (start == end) {
      return start;
    }
    let mid = Math.floor((start + end) / 2);
    let r = guess(mid);
    if (r == 0) {
      return mid;
    } else if (r == 1) {
      return findAns(mid + 1, end);
    } else {
      return findAns(start, mid - 1);
    }
  };
  if (n == 1) {
    return 1;
  }
  return findAns(1, n);
};
// @lc code=end
