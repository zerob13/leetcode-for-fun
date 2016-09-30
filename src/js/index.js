import rever from './ReverseLinkedList';

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var head = new ListNode(1);
head.next = new ListNode(2);
console.dir(rever(head));
