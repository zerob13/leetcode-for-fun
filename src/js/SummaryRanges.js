/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  nums.sort(function(a, b) {
    if (a <= b) {
      return -1;
    }
    return 1;
  });
  var res = [];
  for (var i = 0; i < nums.length;) {
    var st = nums[i];
    var co = 1;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] === st + 1) {
        st = st + 1;
        co++;
      } else {
        break;
      }
    }
    if (co == 1) {
      res.push(nums[i].toString());
      i++;
    } else {
      res.push(nums[i].toString() + '->' + nums[i + co - 1].toString());
      i = i + co;
    }
  }
  return res;

};
