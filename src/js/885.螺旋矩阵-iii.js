/*
 * @lc app=leetcode.cn id=885 lang=javascript
 *
 * [885] 螺旋矩阵 III
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function (R, C, r0, c0) {
  let hash = [];
  for (let i = 0; i < R; i++) {
    hash[i] = [];
    for (let j = 0; j < C; j++) {
      hash[i][j] = 1;
    }
  }
  let ans = [];
  let left = R * C;
  let cr = r0;
  let cc = c0;
  ans = [[r0, c0]];
  left--;
  let dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let cd = 0;
  hash[r0][c0] = 0;
  while (left > 0) {
    cr += dir[cd][0];
    cc += dir[cd][1];
    if (cr >= 0 && cc >= 0 && cr < R && cc < C) {
      if (hash[cr][cc] == 1) {
        hash[cr][cc] = 0;
        ans.push([cr, cc]);
        left--;
        cd++;
        cd %= 4;
        continue;
      } else {
        cr -= dir[cd][0];
        cc -= dir[cd][1];
        cd--;
        if (cd < 0) {
          cd = 3;
        }
      }
    } else {
      cd++;
      cd %= 4;
    }
  }
  return ans;
};
// @lc code=end
