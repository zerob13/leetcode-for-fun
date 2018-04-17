/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  var result = [nums[0]];
  var co = 0;
  for (var i = 1; i < nums.length; i++) {
    if (result[co] == nums[i]) {
      continue;
    }
    result.push(nums[i]);
    co = co + 1;
  }
  for (var i = 0; i <= co; i++) {
    nums[i] = result[i]
  }
  return co + 1;
};
