/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let result = null;
  for (let i = 0; i < paths.length; i++) {
    let t = paths[i][1];
    let isOK = true;
    for (let j = 0; j < paths.length; j++) {
      if (j == i) {
        continue;
      }
      if (paths[j][0] == t) {
        isOK = false;
        break;
      }
    }
    if (isOK) {
      result = t;
      break;
    }
  }
  return result;
};
// @lc code=end
