/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let result = [];
  let min = null;
  for (let i = 0; i < list1.length; i++) {
    let idx = list2.indexOf(list1[i]);
    if (idx >= 0) {
      if (min == null || min > idx + i) {
        min = idx + i;
        result = [list1[i]];
      } else if (min == idx + i) {
        result.push(list1[i]);
      }
    }
  }
  return result;
};
// @lc code=end
