/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let allPath = [];
  let dfs = function (curNode, cPath) {
    if (!curNode) {
      return;
    }
    let nextPath = "";
    if (cPath.length === 0) {
      nextPath = "" + curNode.val;
    } else {
      nextPath += cPath + "->" + curNode.val;
    }
    if (!curNode.left && !curNode.right) {
      allPath.push(nextPath);
      return;
    }
    if (curNode.left) {
      dfs(curNode.left, nextPath);
    }
    if (curNode.right) {
      dfs(curNode.right, nextPath);
    }
    return;
  };
  allPath = [];
  dfs(root, "");
  return allPath;
};
// @lc code=end
