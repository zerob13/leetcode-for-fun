/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var sb=s.split('').sort();
  var st=t.split('').sort();
  if(sb.length==st.length){
    for(let i=0;i<sb.length;i++){
      if(st[i]!=sb[i]){
        return false;
      }
    }
    return true;
  }
  return false;
};