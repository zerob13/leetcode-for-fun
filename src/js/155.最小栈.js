/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minVal = null;
  this.minCount = 0;
  this.stackData = [];
  return null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.minVal == null || this.minVal > x) {
    this.minVal = x;
    this.minCount = 1;
  } else if (this.minVal == x) {
    this.minCount++;
  }
  this.stackData.unshift(x);
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let remove = this.stackData.shift();
  if (remove == this.minVal) {
    this.minCount--;
  }
  if (this.minCount <= 0) {
    this.minVal = this.stackData[0];
    for (let i = 1; i < this.stackData.length; i++) {
      if (this.minVal > this.stackData[i]) {
        this.minVal = this.stackData[i];
        this.minCount = 1;
      } else if (this.minVal == this.stackData[i]) {
        this.minCount++;
      }
    }
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stackData.length > 0) {
    return this.stackData[0];
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
