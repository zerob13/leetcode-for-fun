/**
 * @param {number} num
 * @return {string[]}
 */

function BitCount1(n) {
  let c = 0; // 计数器
  for (c = 0; n > 0; n >>= 1) // 循环移位
    c += n & 1; // 如果当前位是1，则计数器加1
  return c;
}
var table = [];
for (let i = 0; i <= 11; i++) {
  for (let j = 0; j <= 59; j++) {
    let count = BitCount1(i) + BitCount1(j);
    if (!table[count]) {
      table[count] = [];
    }
    if (j < 10) {
      table[count].push(i + ':0' + j);
    } else {
      table[count].push(i + ':' + j);
    }
  }
}
var readBinaryWatch = function (num) {
  if(table[num]) {
    return table[num];
  }
  return [];
};

export default readBinaryWatch;