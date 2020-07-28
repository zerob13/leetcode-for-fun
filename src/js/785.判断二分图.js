/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  let set = [];
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
    let fy = find(y);
    if (fx != fy) {
      set[fx] = fy;
    }
  };
  for (let i = 0; i < graph.length; i++) {
    set[i] = i;
  }
  for (let i = 0; i < graph.length; i++) {
    let fi = find(i);
    for (let j = 0; j < graph[i].length; j++) {
      let fj = find(graph[i][j]);
      if (fi == fj) {
        return false;
      } else {
        join(graph[i][0], graph[i][j]);
      }
    }
  }
  return true;
};
// @lc code=end
