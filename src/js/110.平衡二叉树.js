/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isOk = true;
  let depCal = function (root, curDep) {
    let lDep = curDep;
    let rDep = curDep;
    if (!isOk) {
      return 888;
    }
    if (root.left) {
      lDep = depCal(root.left, curDep + 1);
    }
    if (root.right) {
      rDep = depCal(root.right, curDep + 1);
    }
    // console.log(lDep, rDep);
    if (Math.abs(lDep - rDep) > 1) {
      isOk = false;
    }
    return lDep > rDep ? lDep : rDep;
  };
  if (root) {
    depCal(root, 0);
  }
  return isOk;
};
// @lc code=end
