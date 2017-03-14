/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let ans = [];
  ans[0] = 0;
  let res = [];
  nums.forEach((it) => {
    ans[it] = it;
  });
  for (let i = 1; i <= nums.length; i++) {
    if (!ans[i]) {
      res.push(i);
    }
  }
  return res;
};

export default findDisappearedNumbers;
