/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let set = [];
  for (let i = 0; i < 20000; i++) {
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
  for (let i = 0; i < stones.length; i++) {
    join(stones[i][0], stones[i][1] + 10000);
  }
  let count = stones.length;
  let res = [];
  // 数出有多少集合,每个集合至少要有一个石头，所以多出来的石头就是可以删掉的
  for (let i = 0; i < stones.length; i++) {
    let t = find(stones[i][0]);
    if (res.indexOf(t) < 0) {
      res.push(t);
    }
  }

  return count - res.length;
};
// @lc code=end
