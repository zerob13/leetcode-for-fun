/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let res = [];
  findNums.forEach((item)=>{
    let st = nums.slice();
    let max=-1;
    while(st.length>0){
      let t = st.pop();
      if(t>item){
        max = t;
      }
      if(t==item){
        break;
      }
    }
    res.push(max);
  });
  return res;
};

export default nextGreaterElement;
