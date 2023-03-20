/* 
Given a binary tree, write a function to test if the tree is a binary search tree.
always check values equal to the parent should go to the left or to the right
*/

class Node {
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

// o (n)
function isBST(n) {

	let isBSTHelper = (n, min, max) => {
		if (!n) return true;
		if (n.value < min || n.value > max) return false;
		return isBSTHelper(n.left, min, n.value) && isBSTHelper(n.right, n.value + 1, max); // n.value + 1 we dont want it to be equal
	}

	return isBSTHelper(n, Number.MIN_VALUE, Number.MAX_VALUE);
}

function preorder(node){
  if(node){
    console.log(node.value);
    dfs(node.left);
    dfs(node.right);
  }
}

function inorder(node){
   if(node){
      inorder(node.left);
      console.log(node.value);
      inorder(node.right);
   }
}

function postorder(node){
   if(node){
      inorder(node.left);
      inorder(node.right);
      console.log(node.value);
   }
}

let left = new Node(3, null, null);
let right = new Node(6, null, null);
let tree = new Node(5, left, right);

console.log(isBST(tree)); // true
