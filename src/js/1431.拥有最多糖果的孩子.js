/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = candies[0];
  let result = [];
  for (let i = 1; i < candies.length; i++) {
    if (max < candies[i]) {
      max = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  }
  return result;
};
// @lc code=end
