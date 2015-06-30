/**
 *  * Definition for a binary tree node.
 *   * function TreeNode(val) {
 *    *     this.val = val;
 *     *     this.left = this.right = null;
 *      * }
 *       */
/**
 *  * @param {TreeNode} root
 *   * @return {TreeNode}
 *    */
function invert(root) {

  var t = new TreeNode();
  if (root.left) {
    t.left = root.left.left;
    t.right = root.left.right;
    t.val = root.left.val;
  } else {
    t = null;
  }
  if (root.right) {
    if (!root.left) {
      root.left = new TreeNode();
    }
    root.left.left = root.right.left;
    root.left.val = root.right.val;
    root.left.right = root.right.right;
  } else {
    root.left = null;
  }


  if (!root.right && t) {
    root.right = new TreeNode();
  }
  if (t) {
    root.right.left = t.left;
    root.right.right = t.right;
    root.right.val = t.val;
  } else {
    root.right = t;
  }
  if (root.left) {
    invert(root.left);
  }
  if (root.right) {
    invert(root.right);
  }
}

var invertTree = function(root) {
  if (root) {
    invert(root)
  }
  return root;
};
