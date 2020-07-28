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
  let cur = head;
  let prev = null;
  while (cur) {
    if (cur.val == val) {
      if (prev) {
        prev.next = cur.next;
      } else {
        head = cur.next;
      }
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return head;
};
// @lc code=end
