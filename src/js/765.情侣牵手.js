/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  if (row.length == 0) {
    return 0;
  }
  let set = [];
  for (let i = 0; i < row.length; i += 2) {
    set[i] = i;
    set[i + 1] = i;
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
  for (let i = 0; i < row.length; i += 2) {
    join(row[i], row[i + 1]);
  }
  let sum = row.length / 2;
  for (let i = 0; i < row.length; i++) {
    if (set[i] == i) {
      sum--;
    }
  }
  return sum;
};
// @lc code=end
