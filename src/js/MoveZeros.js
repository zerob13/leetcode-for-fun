/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums.length = nums.length - 1;
      count++;
      i--;
    }
  }
  while (count--) {
    nums.push(0);
  }
};

export default moveZeroes;