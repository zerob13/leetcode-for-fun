/**
 * @param {number} n
 * @return {string[]}
 */
var map = [];
var fizzBuzz = function(n) {
  if (map.length>=n) {
    return map.slice(0, n);
  }else{
    for(let i=map.length;i<n;i++){
      var t=i+1;
      if(t%3==0&&t%5==0){
        map[i]='FizzBuzz';
        continue;
      }
      if(t%3==0&&t%5!=0){
        map[i]='Fizz';
        continue;
      }
      if(t%3!=0&&t%5==0){
        map[i]='Buzz';
        continue;
      }
      map[i]=t;
    }
    return map.slice(0,n);
  }


};

export default fizzBuzz;
