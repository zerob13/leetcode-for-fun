/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let dp = [[]];
  let n = dungeon.length;
  let m = dungeon[n - 1].length;
  dp[n - 1] = [];
  dp[n - 1][m - 1] =
    1 - dungeon[n - 1][m - 1] < 1 ? 1 : 1 - dungeon[n - 1][m - 1];
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] === undefined) {
      dp[i] = [];
    }
    for (let j = m - 1; j >= 0; j--) {
      if (i == n - 1 && j == m - 1) {
        continue;
      }
      if (i + 1 < n && j + 1 < m) {
        let t = dp[i + 1][j] > dp[i][j + 1] ? dp[i][j + 1] : dp[i + 1][j];
        dp[i][j] = t - dungeon[i][j] > 1 ? t - dungeon[i][j] : 1;
      }
      if (i == n - 1) {
        dp[i][j] =
          dp[i][j + 1] - dungeon[i][j] > 1 ? dp[i][j + 1] - dungeon[i][j] : 1;
      }
      if (j == m - 1) {
        dp[i][j] =
          dp[i + 1][j] - dungeon[i][j] > 1 ? dp[i + 1][j] - dungeon[i][j] : 1;
      }
    }
  }
  return dp[0][0];
};

// @lc code=end
