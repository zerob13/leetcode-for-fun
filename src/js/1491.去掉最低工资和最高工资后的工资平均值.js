/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let mai = 0;
  let mii = 0;
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] > salary[mai]) {
      mai = i;
    }
    if (salary[i] < salary[mii]) {
      mii = i;
    }
  }
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    if (i == mai || i == mii) {
      continue;
    }
    sum += salary[i];
  }
  return sum / (salary.length - 2);
};
// @lc code=end
