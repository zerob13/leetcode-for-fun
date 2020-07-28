/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let map = [];
  for (let i = 0; i < n; i++) {
    map.push(i + 1);
  }
  let gen = function (co, curRes) {
    if (co == k) {
      let t = [...curRes];
      result.push(t);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (map[i] != -1) {
        if (curRes.length == 0 || curRes[curRes.length - 1] < map[i]) {
          curRes.push(map[i]);
          map[i] = -1;
          gen(co + 1, curRes);
          map[i] = curRes.pop();
        }
      }
    }
  };
  gen(0, []);
  return result;
};
// @lc code=end
