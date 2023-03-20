/*
  Given a tree, write a function to find the length of the longest branch of nodes in increasing consecutive order.
  
  eg.
     0
   /   \
  1     2
 / \   / \
1   2 1   3
 
length = 3
*/
 
class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
 
// DFS
function longestConsecutive (n) {
  if (n === null) return 0;
  
  var consecutive = (n, prev, length) => {
    if (n === null) return length;
    if (n.value === prev + 1) {
      let leftLength = consecutive(n.left, n.value, length + 1);
      let rightLength = consecutive(n.right, n.value, length + 1);
      return Math.max(...[leftLength, rightLength]);
    } else {
      let leftLength = consecutive(n.left, n.value, 1);
      let rightLength = consecutive(n.right, n.value, 1);
      return Math.max(...[leftLength, rightLength, length]);
    }
  };
  
  let leftLength = consecutive(n.left, n.value, 1);
  let rightLength = consecutive(n.right, n.value, 1);
  return Math.max(...[leftLength, rightLength, length]);
}
 
let left = new Node(1);
left.left = new Node(1);
left.right = new Node(2);
 
let right = new Node(2);
right.left = new Node(1);
right.right = new Node(3);
 
let tree = new Node(0);
tree.left = left;
tree.right = right;
 
longestConsecutive(tree);
