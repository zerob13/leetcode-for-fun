/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((x, y) => x - y);
  let ans = [];
  let min = null;
  for (let i = 0; i < arr.length - 1; i++) {
    let del = arr[i + 1] - arr[i];
    if (min == null || min > del) {
      min = del;
      ans = [[arr[i], arr[i + 1]]];
    } else if (min == del) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }
  return ans;
};
// @lc code=end
