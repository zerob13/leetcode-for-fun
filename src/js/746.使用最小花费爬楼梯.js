/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length == 2) {
    return cost[0] < cost[1] ? cost[0] : cost[1];
  }
  let f = [];
  f[0] = cost[0];
  f[1] = cost[1];
  let n = cost.length;
  cost[n] = 0;
  for (let i = 2; i <= n; i++) {
    let a1 = cost[i] + f[i - 1];
    let a2 = cost[i] + f[i - 2];
    if (a2 > a1) {
      f[i] = a1;
    } else {
      f[i] = a2;
    }
  }
  return f[n];
};
// @lc code=end
