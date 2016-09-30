/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hash=[];
  let idx=0;
  for(let i=0;i<s.length;i++){
    if(hash[s[i].charCodeAt(0)]){
      hash[s[i].charCodeAt(0)]+=1;
    }else{
      hash[s[i].charCodeAt(0)]=1;
    }
  }
  for(let i=0;i<s.length;i++){
    if(hash[s[i].charCodeAt(0)]==1){
      return i;
    }
  }
  return -1;
};