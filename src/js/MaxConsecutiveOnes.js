/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != 0 && nums[i] != 0) {
      nums[i] = nums[i - 1] + nums[i];
    }
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  return max;
};
export default findMaxConsecutiveOnes;
