/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let dir = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 0],
    [0, -1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];
  //  0 1 保持不变 2 表示1-》0 3表示 0》1
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let t = board[i][j];
      let clive = 0;
      let cdead = 0;
      for (let k = 0; k < 8; k++) {
        let ni = i + dir[k][0];
        let nj = j + dir[k][1];
        if (ni >= board.length || ni < 0 || nj < 0 || nj >= board[i].length) {
          continue;
        }
        if (board[ni][nj] == 1 || board[ni][nj] == 2) {
          clive++;
        } else {
          cdead++;
        }
      }
      if (t == 0) {
        if (clive == 3) {
          board[i][j] = 3;
        }
      } else {
        if (clive < 2) {
          board[i][j] = 2;
        }
        if (clive > 3) {
          board[i][j] = 2;
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 2) {
        board[i][j] = 0;
      }
      if (board[i][j] == 3) {
        board[i][j] = 1;
      }
    }
  }
};
// @lc code=end
