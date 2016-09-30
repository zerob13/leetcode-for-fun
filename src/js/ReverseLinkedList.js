/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function doRev(now, last) {
  var pre = now.next;
  now.next = last;
  if (pre != null) {
    return doRev(pre, now);
  }
  return now;

}
var reverseList = function (head) {
  if (head != null) {
    return doRev(head, null)
  }
  return head;
};

export default reverseList;