/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  let genTrees = function (start, end) {
    let res = [];
    if (start > end) {
      res.push(null);
      return res;
    }
    for (let i = start; i <= end; i++) {
      let sleft = genTrees(start, i - 1);
      let sright = genTrees(i + 1, end);
      for (let j = 0; j < sleft.length; j++) {
        for (let k = 0; k < sright.length; k++) {
          let n = new TreeNode(i);
          n.left = sleft[j];
          n.right = sright[k];
          res.push(n);
        }
      }
    }
    return res;
  };
  if (n == 0) {
    return [];
  }
  return genTrees(1, n);
};
// @lc code=end
