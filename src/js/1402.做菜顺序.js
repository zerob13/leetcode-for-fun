/*
 * @lc app=leetcode.cn id=1402 lang=javascript
 *
 * [1402] 做菜顺序
 */

// @lc code=start
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((x, y) => -x + y);
  let presum = 0;
  let ans = 0;
  for (let i = 0; i < satisfaction.length; i++) {
    if (presum + satisfaction[i] > 0) {
      presum += satisfaction[i];
      ans += presum;
    } else {
      break;
    }
  }
  return ans;
};
// @lc code=end
