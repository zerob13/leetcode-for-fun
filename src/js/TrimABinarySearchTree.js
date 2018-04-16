/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function processTree(root, L, R) {
  if (root == null) {
    return null;
  }
  if (root.val >= L && root.val <= R) {
    root.left = processTree(root.left, L, R);
    root.right = processTree(root.right, L, R);
    return root;
  } else if (root.val < L) {
    return processTree(root.right, L, R);
  } else {
    return processTree(root.left, L, R);
  }
}

var trimBST = function(root, L, R) {
  return processTree(root, L, R);

};

function test() {
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(2)
  console.dir(trimBST(root, 1, 2))
}
test()
