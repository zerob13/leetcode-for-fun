/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let buildTree = function (start, end) {
    if (start == end) {
      let item = new TreeNode(nums[start]);
      return item;
    }
    if (start > end) {
      return null;
    }
    if (start + 1 == end) {
      let item = new TreeNode(nums[end]);
      item.left = new TreeNode(nums[start]);
      return item;
    }
    let mid = Math.round((start + end) / 2);
    let item = new TreeNode(nums[mid]);
    item.left = buildTree(start, mid - 1);
    item.right = buildTree(mid + 1, end);
    return item;
  };
  return buildTree(0, nums.length - 1);
};
// @lc code=end
