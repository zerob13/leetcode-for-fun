/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
var hammingWeight = function(n) {
  let st=dec2bin(n);
  let co=0;
  for(let i=0;i<st.length;i++){
    if(st[i]=='1'){
      co++;
    }
  }
  return co;
};