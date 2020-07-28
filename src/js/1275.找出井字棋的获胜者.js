/*
 * @lc app=leetcode.cn id=1275 lang=javascript
 *
 * [1275] 找出井字棋的获胜者
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  let map = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let checkResult = function () {
    let win = 0;
    for (let i = 0; i < 3; i++) {
      if (map[i][0] == 1 && map[i][1] == 1 && map[i][2] == 1) {
        win = 1;
      }
      if (map[0][i] == 1 && map[1][i] == 1 && map[2][i] == 1) {
        win = 1;
      }
      if (map[i][0] == 2 && map[i][1] == 2 && map[i][2] == 2) {
        win = 2;
      }
      if (map[0][i] == 2 && map[1][i] == 2 && map[2][i] == 2) {
        win = 2;
      }
    }
    if (win == 0) {
      if (map[0][0] == 1 && map[1][1] == 1 && map[2][2] == 1) {
        win = 1;
      }
      if (map[0][2] == 1 && map[1][1] == 1 && map[2][0] == 1) {
        win = 1;
      }
      if (map[0][0] == 2 && map[1][1] == 2 && map[2][2] == 2) {
        win = 2;
      }
      if (map[0][2] == 2 && map[1][1] == 2 && map[2][0] == 2) {
        win = 2;
      }
    }
    if (win == 0) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (map[i][j] == 0) {
            win = -1;
          }
        }
      }
    }
    return win;
  };
  for (let i = 0; i < moves.length; i++) {
    map[moves[i][0]][moves[i][1]] = i % 2 == 0 ? 1 : 2;
  }
  // console.log(map);
  let result = checkResult();
  if (result == -1) {
    return "Pending";
  } else if (result == 0) {
    return "Draw";
  } else if (result == 1) {
    return "A";
  } else {
    return "B";
  }
};
// @lc code=end
