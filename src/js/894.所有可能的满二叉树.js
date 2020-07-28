/*
 * @lc app=leetcode.cn id=894 lang=javascript
 *
 * [894] 所有可能的满二叉树
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
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (N) {
  let res = [];
  if (N % 2 == 0) {
    return [];
  }
  if (N == 1) {
    res.push(new TreeNode(0));
    return res;
  }
  for (let i = 1; i < N; i += 2) {
    let lt = allPossibleFBT(i);
    let rt = allPossibleFBT(N - 1 - i);
    for (let i = 0; i < lt.length; i++) {
      for (let j = 0; j < rt.length; j++) {
        let r = new TreeNode(0);
        r.left = lt[i];
        r.right = rt[j];
        res.push(r);
      }
    }
  }
  return res;
};
// @lc code=end
