/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : fast.next;
  }
  // slow is middle point
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  while (head && prev) {
    if (head.val != prev.val) {
      return false;
    }
    head = head.next;
    prev = prev.next;
  }
  return true;
};
// @lc code=end
