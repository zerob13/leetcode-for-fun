import readBw from './BinaryWatch';

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function ListNode(val) {
  this.val = val;
  this.next = null;
}
console.log('[')
console.dir(readBw(0));
console.log(',')
console.dir(readBw(1));
console.log(',')
console.dir(readBw(2));
console.log(',')
console.dir(readBw(3));
console.log(',')
console.dir(readBw(4));
console.log(',')
console.dir(readBw(5));
console.log(',')
console.dir(readBw(6));
console.log(',')
console.dir(readBw(7));
console.log(',')
console.dir(readBw(8));
console.log(',')
console.dir(readBw(9));
console.log(',')
console.dir(readBw(10));
console.log(']');

