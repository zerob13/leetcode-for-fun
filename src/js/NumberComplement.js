/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var len = num.toString(2).length;
    var mask=Math.pow(2,len)-1;
    return num^mask;
};
