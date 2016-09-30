/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums=nums.sort();
  let last=nums[0];
  let lastcount=0;
  for(let i=0;i<nums.length;i++){
    if(last==nums[i]){
      lastcount++;
    }else{
      if(lastcount>=nums.length/2){
        return last;
      }else{
        lastcount=1;
        last=nums[i];
      }
    }
  }
  return last;
};