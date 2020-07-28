/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == "X") {
        let xi = i - 1;
        let xj = j - 1;
        let isOk = 0;
        if (xi < 0 || xi >= board.length || board[xi][j] != "X") {
          isOk++;
        }
        if (xj < 0 || xj >= board[i].length || board[i][xj] != "X") {
          isOk++;
        }
        if (isOk == 2) {
          count++;
        }
      }
    }
  }
  return count;
};
// @lc code=end
