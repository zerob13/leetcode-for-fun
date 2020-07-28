/*
 * @lc app=leetcode.cn id=1409 lang=javascript
 *
 * [1409] 查询带键的排列
 */

// @lc code=start
/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let result = [];
  let p = [];
  for (let i = 1; i <= m; i++) {
    p.push(i);
  }
  for (let i = 0; i < queries.length; i++) {
    let idx = p.indexOf(queries[i]);
    let t = p[idx];
    p.splice(idx, 1);
    p.unshift(t);
    result.push(idx);
  }
  return result;
};
// @lc code=end
