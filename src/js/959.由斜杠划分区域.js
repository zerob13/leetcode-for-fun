/*
 * @lc app=leetcode.cn id=959 lang=javascript
 *
 * [959] 由斜杠划分区域
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
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
    let fy = y;
    if (fx != fy) {
      set[fx] = fy;
    }
  };

  for (let i = 0; i < grid.length + 1; i++) {
    set[i] = i;
  }
};
// @lc code=end
