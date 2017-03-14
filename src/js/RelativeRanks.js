/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let sortNum=nums.slice();
    let ans=[];
    sortNum.sort((a,b)=>{
        return b-a;
    });
    sortNum.forEach((it,idx)=>{
        let rank=nums.indexOf(it);
        if(idx==0){
            ans[rank]='Gold Medal';
        }else if(idx==1){
            ans[rank]='Silver Medal';
        }else if(idx==2){
            ans[rank]='Bronze Medal';
        }else{
            ans[rank]=(idx+1).toString();
        }
    });
    return ans;
};
