/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  let result = [];
  let walkTree = function (cNode) {
    if (!cNode) {
      return;
    }
    if (cNode.left) {
      walkTree(cNode.left);
    }
    result.push(cNode.val);
    if (cNode.right) {
      walkTree(cNode.right);
    }
  };
  walkTree(root1);
  walkTree(root2);
  result.sort((x, y) => x - y);
  return result;
};
// @lc code=end
