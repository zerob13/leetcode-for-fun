/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let stack = [];
  let len = nums.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    res[i] = -1;
  }
  for (let i = 0; i < len * 2; i++) {
    let j = i % len;
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[j]) {
      res[stack.pop()] = nums[j];
    }
    stack.push(j);
  }
  return res;
};

export default nextGreaterElements;
