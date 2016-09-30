/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function doSearch(nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums2.length; i++) {
    let idx = nums1.indexOf(nums2[i]);
    if (idx != -1) {
      res.push(nums2[i]);
      nums1[idx] = null;
    }
  }
  return res;
}
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return doSearch(nums1, nums2);
  } else {
    return doSearch(nums2, nums1);
  }
};

export default intersect;
