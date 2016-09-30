/**
 * @param {number} num
 * @return {string}
 */

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
var toHex = function (num) {
  let sb = dec2bin(num);
  return parseInt(sb, 2).toString(16);
};