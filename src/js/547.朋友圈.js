/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  let set = [];
  for (let i = 0; i < M.length; i++) {
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
    let fy = find(y);
    if (fx != fy) {
      set[fx] = fy;
    }
  };
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] == 1) {
        join(i, j);
      }
    }
  }
  let c = 0;
  for (let i = 0; i < M.length; i++) {
    if (set[i] == i) {
      c++;
    }
  }
  return c;
};
// @lc code=end
