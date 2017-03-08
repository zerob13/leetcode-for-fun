var findTheDifference = function(s, t) {
  let table = [];
  s = s.split('');
  t = t.split('');
  for (let i = 0; i <= 'z'.charCodeAt(0) - 66; i++) {
    table[i] = 0;
  }
  s.forEach((item) => {
    table[(item.charCodeAt(0) - 66)]++;
  });
  console.dir(table);
  t.forEach((item) => {
    table[(item.charCodeAt(0) - 66)]--;
  });
  var result = '';
  console.dir(table);
  for (let i = 0; i <= 'z'.charCodeAt(0) - 66; i++) {
    let t = table[i];
    if (table[i] != 0) {
      result = String.fromCharCode(i + 66);
    }
  }
  return result;

};
export default findTheDifference;
