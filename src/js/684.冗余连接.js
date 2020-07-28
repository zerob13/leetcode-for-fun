/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  let set = [];
  for (let i = 0; i < edges.length + 1; i++) {
    set[i] = i;
  }
  let find = function (x) {
    let r = x;
    while (set[r] != r) {
      r = set[r];
    }
    let i = x;
    let j;
    while (i != r) {
      j = set[i];
      set[i] = r;
      i = j;
    }
    return r;
  };
  let join = function (x, y) {
    let fx = find(x);
    let fy = y;
    if (fx != fy) {
      set[fx] = fy;
    }
  };
  for (let i = 0; i < edges.length; i++) {
    let x1 = find(edges[i][0]);
    let x2 = find(edges[i][1]);
    if (x1 == x2) {
      return [edges[i][0], edges[i][1]];
    } else {
      join(edges[i][0], edges[i][1]);
    }
  }
};
// @lc code=end
