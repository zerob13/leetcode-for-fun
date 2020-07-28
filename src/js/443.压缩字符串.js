/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let pc = chars[0];
  let len = chars.length;
  let i = 1;
  let start = 0;
  let end = 0;
  while (i <= len) {
    if (i < len && pc == chars[i]) {
      end++;
      i++;
    } else {
      let count = `${end - start + 1}`;
      // console.log(pc, start, end);
      if (end - start > 0) {
        for (let j = 0; j < count.length; j++) {
          chars[start + 1 + j] = count[j];
        }
        // console.log(JSON.stringify(chars));
        let offset = end - (start + count.length);
        // console.log(offset);
        if (offset > 0) {
          for (let j = end + 1; j < len; j++) {
            chars[start + count.length + j - end] = chars[j];
          }
          len -= offset;
        }
        i = start + count.length + 1;
      }
      pc = chars[i];
      // console.log(pc, i);
      start = i;
      end = i;
      i++;
    }
  }
  return len;
};
// @lc code=end
