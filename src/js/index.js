import delNode from './DeleteNodeinALinkedList';

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var root = new ListNode(0);
root.next = new ListNode(0);
root.next.next = new ListNode(0);
root.next.next.next = new ListNode(0);

delNode(root);
console.dir(root);

