/*
  Given a binary tree, write a function to determine whether the tree is balanced.
 
      1
     / \
    2   3
   / \   \
  4   5   6
        
  Two definition of balanced tree:
  
  * binary tree is balanced if for each node it holds that the number of inner nodes in the left subtree and the number of inner nodes in the right subtree differ by at most 1.
 
  * binary tree is balanced if for any two leaves the difference of the depth is at most 1.
 
 
  Solution:
  Is every subtree balanced?
  if it is not balanced -> height = -1
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBalanced(n) {
    return (balancedHeight(n) > -1);
}

function balancedHeight(n) {
    if (!n) return 0;

    // height of childes
    let h1 = balancedHeight(n.left);
    let h2 = balancedHeight(n.right);

    if (h1 === -1 || h2 === -1) return -1;
    if (Math.abs(h1 - h2) > 1) return -1;

    // the height of a subtree is the depth
    // of the longest branch in that tree
    if (h1 > h2) return h1 + 1;

    return h2 + 1;
}

/*
    1
   / \
  2   3
 /   / \
4   6  7
*/


let left = new Node(2);
left.left = new Node(4);
//left.left.left = new Node(5) //-> makes it false

let right = new Node(3);
right.left = new Node(6);
right.right = new Node();

let tree = new Node(1);
tree.left = left;
tree.right = right;

console.log(isBalanced(tree));
