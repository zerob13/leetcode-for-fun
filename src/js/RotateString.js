/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  return (A.length==B.length&&!!(~(A+A).indexOf(B)))
};

function test(){
  console.log(rotateString('abcde','cdeab'))
  console.log(rotateString('abcde','abced'))
}

test()
