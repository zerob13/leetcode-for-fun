/*
 * @lc app=leetcode.cn id=677 lang=javascript
 *
 * [677] 键值映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.root = { children: [], val: 0 };
  for (let i = 0; i < 26; i++) {
    this.root.children[i] = null;
  }
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let idx = 0;
  let cur = this.root;
  while (idx < key.length) {
    let t = key.charCodeAt(idx) - 97;
    if (!cur.children[t]) {
      cur.children[t] = {
        val: 0,
        end: false,
        children: [],
      };
      for (let i = 0; i < 26; i++) {
        cur.children[t].children[i] = null;
      }
    }
    cur = cur.children[t];
    idx++;
    if (idx == key.length) {
      cur.val = val;
      cur.end = true;
    }
  }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let idx = 0;
  let cur = this.root;
  let ans = 0;
  while (idx < prefix.length) {
    let t = prefix.charCodeAt(idx) - 97;
    if (!cur.children[t]) {
      return ans;
    }
    cur = cur.children[t];
    idx++;
  }
  let cal = function (cNode) {
    if (cNode.end) {
      ans += cNode.val;
    }
    for (let i = 0; i < 26; i++) {
      if (cNode.children[i]) {
        cal(cNode.children[i]);
      }
    }
  };
  cal(cur);

  return ans;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end
