/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
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
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  let path = [];
  let curCount = 0;
  let curVal = null;
  for (let i = 0; i < S.length; i++) {
    if (S[i] != "-") {
      // path.push({ val: S[i], depth: curCount });
      // curCount = 0;
      if (curVal == null) {
        curVal = S[i];
      } else {
        curVal += S[i];
      }
    } else {
      if (curVal != null) {
        path.push({ val: curVal, depth: curCount });
        curCount = 0;
        curVal = null;
      }
      curCount++;
    }
  }
  if (curVal != null) {
    path.push({ val: curVal, depth: curCount });
    curCount = 0;
    curVal = null;
  }
  let buildTree = function (ci) {
    if (ci == path.length) {
      return null;
    }
    let r = new TreeNode(path[ci].val);
    let cdep = path[ci].depth;
    path[ci] = null;
    let lt = null;
    let rt = null;
    for (let i = ci + 1; i < path.length; i++) {
      if (path[i] && path[i].depth == cdep + 1) {
        if (lt == null) {
          lt = i;
        } else if (rt == null) {
          rt = i;
          break;
        }
      }
    }
    // console.log(lt, rt, cdep);
    if (rt != null) {
      r.right = buildTree(rt);
    }
    if (lt != null) {
      r.left = buildTree(lt);
    }
    return r;
  };
  // console.log(path);
  return buildTree(0);
};
// @lc code=end
