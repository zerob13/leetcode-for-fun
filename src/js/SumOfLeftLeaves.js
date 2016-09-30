/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function calSum(root, isLeft) {
  if (root.left == null && root.right == null) {
    if (isLeft) {
      return root.val;
    } else {
      return 0;
    }
  }
  if (root.left == null && root.right != null) {
    return calSum(root.right, false);
  }
  if (root.left != null && root.right == null) {
    return calSum(root.left, true);
  }
  if (root.left != null && root.right != null) {
    return calSum(root.left, true) + calSum(root.right, false);
  }

}
var sumOfLeftLeaves = function (root) {
  if (root == null) {
    return 0;
  }
  return calSum(root, false);
};

export default sumOfLeftLeaves;