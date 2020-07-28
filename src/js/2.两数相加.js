/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var ans = null;
  var carry = 0;
  var cur = null;
  while (l1 || l2 || carry) {
    var tempRes = 0;
    if (l1 && l2) {
      tempRes = l1.val + l2.val;
      l1 = l1.next;
      l2 = l2.next;
    } else if (!l1 && l2) {
      tempRes = l2.val;
      l2 = l2.next;
    } else if (!l2 && l1) {
      tempRes = l1.val;
      l1 = l1.next;
    } else {
      tempRes = 0;
    }
    tempRes += carry;
    carry = 0;
    if (tempRes >= 10) {
      carry = 1;
      tempRes -= 10;
    }
    var rItem = new ListNode(tempRes);
    if (!ans) {
      ans = rItem;
    } else {
      cur.next = rItem;
    }
    cur = rItem;
  }
  return ans;
};
// @lc code=end
