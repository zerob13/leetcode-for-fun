/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function (root, sum) {
  let count = 0;
  let findSum = function (path, i, curSum) {
    if (i == path.length) {
      return curSum == sum ? 1 : 0;
    } else {
      return (
        findSum(path, i + 1, curSum + path[i + 1]) +
        findSum(path, i + 1, path[i + 1])
      );
    }
  };
  let genPath = function (curNode, curPath) {
    if (!curNode.left && !curNode.right) {
      curPath = [...curPath, curNode.val];
      count += findSum(curPath, -1, 0);
      return;
    }
    if (curNode.left) {
      genPath(curNode.left, [...curPath, curNode.val]);
    }
    if (curNode.right) {
      genPath(curNode.right, [...curPath, curNode.val]);
    }
  };
  count = 0;
  if (!root) {
    return 0;
  }
  genPath(root, []);
  return count;
};
// @lc code=end
