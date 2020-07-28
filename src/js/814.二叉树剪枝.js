/*
 * @lc app=leetcode.cn id=814 lang=javascript
 *
 * [814] 二叉树剪枝
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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  let removeTree = function (cNode) {
    if (!cNode.left && !cNode.right) {
      if (cNode.val == 0) {
        return null;
      } else {
        return cNode;
      }
    }
    if (cNode.left) {
      cNode.left = removeTree(cNode.left);
    }
    if (cNode.right) {
      cNode.right = removeTree(cNode.right);
    }
    if (!cNode.left && !cNode.right && cNode.val == 0) {
      return null;
    } else {
      return cNode;
    }
  };
  removeTree(root);
  return root;
};
// @lc code=end
