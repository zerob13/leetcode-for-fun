/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
let dir = [
  [0, 1],
  [1, 0],
  [1, 1],
  [-1, -1],
  [0, -1],
  [-1, 0],
  [1, -1],
  [-1, 1],
];
var imageSmoother = function (M) {
  let result = [];
  for (let i = 0; i < M.length; i++) {
    result[i] = [];
    for (let j = 0; j < M[i].length; j++) {
      let sum = M[i][j];
      let count = 1;
      for (let k = 0; k < 8; k++) {
        let x = i + dir[k][0];
        let y = j + dir[k][1];
        if (x >= 0 && y >= 0 && x < M.length && y < M[i].length) {
          sum += M[x][y];
          count++;
        }
      }
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
};
// @lc code=end
