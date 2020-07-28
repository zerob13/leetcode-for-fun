/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let prev = null;
  let cur = head;
  while (cur) {
    if (cur.val == val) {
      if (!prev) {
        head = head.next;
        cur = head;
      } else {
        prev.next = cur.next;
        cur = cur.next;
      }
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
};
// @lc code=end
