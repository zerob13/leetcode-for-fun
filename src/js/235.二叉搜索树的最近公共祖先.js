/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let genWay = function (curNode, result, target) {
    if (!curNode) {
      return false;
    }
    if (target == curNode.val) {
      return [...result, curNode];
    }
    let newResult = [...result, curNode];

    let rrr;
    if (target > curNode.val) {
      rrr = genWay(curNode.right, newResult, target);
    } else {
      rrr = genWay(curNode.left, newResult, target);
    }
    return rrr;
  };
  let pWay = genWay(root, [], p.val);
  let qWay = genWay(root, [], q.val);
  let result = null;
  if (qWay.length < pWay) {
    for (let i = qWay.length - 1; i >= 0; i--) {
      for (let j = pWay.length - 1; j >= 0; j--) {
        if (qWay[i].val == pWay[j].val) {
          result = qWay[i];
          break;
        }
      }
      if (result != null) {
        break;
      }
    }
  } else {
    for (let j = pWay.length - 1; j >= 0; j--) {
      for (let i = qWay.length - 1; i >= 0; i--) {
        if (qWay[i].val == pWay[j].val) {
          result = qWay[i];
          break;
        }
      }
      if (result != null) {
        break;
      }
    }
  }
  return result;
};
// @lc code=end
