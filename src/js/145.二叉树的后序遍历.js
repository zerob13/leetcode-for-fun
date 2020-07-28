/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  /**
   * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
   * 不能
   */
  if (!root) {
    return [];
  }
  let ans = [];
  let walkTree = function (cNode) {
    if (cNode.left) {
      walkTree(cNode.left);
    }
    if (cNode.right) {
      walkTree(cNode.right);
    }
    ans.push(cNode.val);
  };
  walkTree(root);
  return ans;
};
// @lc code=end
