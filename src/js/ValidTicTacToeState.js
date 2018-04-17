/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  var co = 0
  var cx = 0
  var wx = 0
  var wo = 0
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] == 'X') {
        cx++;
      } else if (board[i][j] == 'O') {
        co++;
      }
    }
  }
  if (cx < co || cx - co > 1) {
    return false;
  }
  // check winner
  // ---
  for (var i = 0; i < 3; i++) {
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' ') {
      if (board[i][0] == 'X') {
        wx++;
      } else {
        wo++;
      }
    }
    if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' ') {
      if (board[0][i] == 'X') {
        wx++;
      } else {
        wo++;
      }
    }
  }
  if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != ' ') {
    if (board[0][0] == 'X') {
      wx++;
    } else {
      wo++;
    }
  }
  if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[2][0] != ' ') {
    if (board[0][2] == 'X') {
      wx++;
    } else {
      wo++;
    }
  }
  if (wx > 0 && wo > 0) {
    return false;
  }

  if (wx > 0 && wo == 0) {
    if (cx - co != 1) {
      return false
    }
  }
  if (wo > 0 && wx == 0) {
    if (co < cx) {
      return false
    }
  }
  return true;
};
