/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let hash1 = [];
  for (let i = 0; i < nums1.length; i++) {
    hash1[nums1[i]] = -1;
  }
  let res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (hash1[nums2[i]] == -1) {
      hash1[nums2[i]] = 0;
      res.push(nums2[i]);
    }
  }
  return res;
};
