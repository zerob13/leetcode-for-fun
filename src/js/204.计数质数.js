/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let hash = [false, false, true];
let maxLen = 2;
var countPrimes = function (n) {
  function checkPrime(a) {
    let ok = true;
    for (let i = 2; i < Math.sqrt(a) + 1; i++) {
      // console.log(i, a, a % i);
      if (a % i == 0) {
        ok = false;
        break;
      }
    }
    return ok;
  }
  let count = 0;
  if (maxLen > n) {
    for (let i = 2; i < n; i++) {
      if (hash[i]) {
        count++;
      }
    }
  } else {
    for (let i = 2; i < maxLen + 1; i++) {
      if (hash[i]) {
        count++;
      }
    }
    for (let i = maxLen + 1; i < n; i++) {
      hash[i] = checkPrime(i);
      if (hash[i]) {
        count++;
      }
    }
    maxLen = n - 1;
  }
  return count;
};
// @lc code=end
