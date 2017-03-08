/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var dis=x^y;
  var c=0;
  for(c=0;dis>0;dis>>=1){
    c+=dis*1;
  }
  return c;
  
    
};
export default hammingDistance;
