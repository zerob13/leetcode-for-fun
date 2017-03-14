import island from './IslandPerimeter.js';
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

console.dir(island([[0,1]]));
