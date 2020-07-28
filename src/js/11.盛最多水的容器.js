/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let curMaxArea = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    let tArea = 0;
    if (height[i] > height[j]) {
      tArea = height[j] * (j - i);
      j--;
    } else {
      tArea = height[i] * (j - i);
      i++;
    }
    if (tArea > curMaxArea) {
      curMaxArea = tArea;
    }
  }
  return curMaxArea;
};
// @lc code=end
