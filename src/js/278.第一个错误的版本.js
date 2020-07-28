/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  function findBad(start, end) {
    if (start + 1 == end || start == end) {
      if (isBadVersion(start)) {
        return start;
      } else {
        return end;
      }
    }
    let mid = Math.floor((start + end) / 2);
    if (isBadVersion(mid)) {
      return findBad(start, mid);
    } else {
      return findBad(mid + 1, end);
    }
  }
  return function (n) {
    if (isBadVersion(1)) {
      return 1;
    } else {
      return findBad(1, n);
    }
  };
};
// @lc code=end
