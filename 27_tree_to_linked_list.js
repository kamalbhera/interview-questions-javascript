/*
Given a tree, wite a function to convert it into a circular doubly linked list from left to right by only modifying the existing pointers.

     1
   /   \
  2     3
 / \   / \
4   5 6   7

Circular Linked List :
<- 4 <-> 2 <-> 5 <-> 1 <-> 6 <-> 3 <-> 7 -> 

*/

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// <- 1 <-> 2 <-> 3 ->, <- 4 <-> 5 <-> 6 ->
//          a         ,          b
function concatenate (a ,b) {
  if (a === null) return b;
  if (b === null) return a;
 
  let aEnd = a.left;
  let bEnd = b.left;
 
  a.left = bEnd;
  bEnd.right = a;
  aEnd.right = b;
  b.left = aEnd;
  return a;
}

function treeToList(n) {
  if (n === null) return n;
  let leftList = treeToList(n.left);
  let rightList = treeToList(n.right);
  n.left = n;
  n.right = n;
 
  n = concatenate(leftList, n);
  n = concatenate(n, rightList);
  return n;
}

let left = new Node(2);
left.left = new Node(4);
left.right = new Node(5);
 
let right = new Node(3);
right.left = new Node(6);
right.right = new Node(7);
 
let tree = new Node(1);
tree.left = left;
tree.right = right;
 
console.log(treeToList(tree));
