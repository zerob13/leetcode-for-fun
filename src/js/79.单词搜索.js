/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
var exist = function (board, word) {
  if (!word) {
    return true;
  }
  let search = function (x, y, idx) {
    if (idx == word.length) {
      console.log(JSON.stringify(board));
      return true;
    }
    let isOk = false;
    for (let i = 0; i < 4; i++) {
      let xx = x + dir[i][0];
      let yy = y + dir[i][1];
      if (xx < 0 || xx >= board.length) {
        continue;
      }
      if (yy < 0 || yy >= board[xx].length) {
        continue;
      }
      if (board[xx][yy] == word[idx]) {
        let t = board[xx][yy];
        board[xx][yy] = -1;
        isOk = search(xx, yy, idx + 1);
        board[xx][yy] = t;
        if (isOk) {
          return true;
        }
      }
    }
    return isOk;
  };
  let isOk = false;
  for (let i = 0; i < board.length; i++) {
    if (isOk) {
      break;
    }
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == word[0]) {
        // console.log(i, j);
        let t = board[i][j];
        board[i][j] = -1;
        isOk = search(i, j, 1);
        board[i][j] = t;
        if (isOk) {
          break;
        }
      }
    }
  }
  return isOk;
};
// @lc code=end
