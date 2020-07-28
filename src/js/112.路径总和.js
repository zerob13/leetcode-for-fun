/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let dfs = function (node, curSum) {
    if (!node.left && !node.right) {
      return curSum + node.val == sum;
    }
    let isOk = false;
    if (node.left) {
      isOk = dfs(node.left, curSum + node.val);
    }
    if (!isOk && node.right) {
      isOk = dfs(node.right, curSum + node.val);
    }
    return isOk;
  };
  if (!root) {
    return false;
  }
  return dfs(root, 0);
};
// @lc code=end
