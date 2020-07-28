/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.val = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.val.unshift(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let len = this.val.length;
  let tS = [];
  for (let i = 0; i < len; i++) {
    let v = this.val.shift();
    tS.unshift(v);
  }
  let result = tS.shift();
  for (let i = 0; i < len - 1; i++) {
    this.val.unshift(tS.shift());
  }
  return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let len = this.val.length;
  let tS = [];
  for (let i = 0; i < len; i++) {
    let v = this.val.shift();
    tS.unshift(v);
  }
  let result = tS.shift();
  this.val.unshift(result);
  for (let i = 0; i < len - 1; i++) {
    this.val.unshift(tS.shift());
  }
  return result;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.val.length <= 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
