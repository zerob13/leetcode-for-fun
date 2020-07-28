/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((x, y) => x - y);
  nums2.sort((x, y) => x - y);
  let a;
  let b;
  if (nums1.length > nums2.length) {
    a = nums2;
    b = nums1;
  } else {
    a = nums1;
    b = nums2;
  }
  let j = 0;
  let ans = [];
  for (let i = 0; i < a.length && j < b.length; i++) {
    while (b[j] < a[i] && j < b.length) {
      j++;
    }
    if (b[j] == a[i]) {
      ans.push(a[i]);
      j++;
    }
  }
  return ans;
};
// @lc code=end
