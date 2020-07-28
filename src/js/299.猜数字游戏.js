/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let hash = [];
  for (let i = 0; i < secret.length; i++) {
    if (hash[secret[i]] == undefined) {
      hash[secret[i]] = 1;
    } else {
      hash[secret[i]]++;
    }
  }
  // console.log(JSON.stringify(hash));
  let aC = 0;
  let bC = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] == secret[i]) {
      aC++;
      hash[guess[i]]--;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== secret[i] && hash[guess[i]]) {
      bC++;
      hash[guess[i]]--;
    }
  }
  return `${aC}A${bC}B`;
};
// @lc code=end
