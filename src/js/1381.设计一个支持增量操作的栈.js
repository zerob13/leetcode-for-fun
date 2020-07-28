/*
 * @lc app=leetcode.cn id=1381 lang=javascript
 *
 * [1381] 设计一个支持增量操作的栈
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.val = [];
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.val.length >= this.maxSize) {
    return null;
  } else {
    this.val.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.val.length > 0) {
    let t = this.val.pop();
    return t;
  }
  return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  let pLen = k > this.val.length ? this.val.length : k;
  for (let i = 0; i < pLen; i++) {
    this.val[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end
