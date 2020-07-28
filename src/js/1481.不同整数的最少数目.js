/*
 * @lc app=leetcode.cn id=1481 lang=javascript
 *
 * [1481] 不同整数的最少数目
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let hash = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] == undefined) {
      hash[arr[i]] = 0;
    }
    hash[arr[i]]++;
  }
  arr.sort((x, y) => {
    return hash[x] - hash[y];
  });
  let count = 0;
  let kk = k;
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      continue;
    }
    if (kk > 0) {
      if (hash[arr[i]] <= kk) {
        kk -= hash[arr[i]];
        hash[arr[i]] = null;
        continue;
      }
    }
    console.log(arr[i], hash[arr[i]]);
    count++;
    hash[arr[i]] = null;
  }
  return count;
};
// @lc code=end
