/*
Given an unsorted linked list, write a function to remove all the duplicates. (without extra data structure)
 
eg.
dedup(1 -> 2 -> 3 -> 2 -> 1) = 1 -> 2 -> 3
 
Time : o(n^2)
Space: o(1)
 
*/
 
class Node {
	constructor (value) {
	  this.value = value;
	  this.next = null;
  }
}
 
function dedup (n) {
  if (n === null) return;
  
  while (n) {
	let curr = n;
	while (curr.next) {
if (curr.next.value === n.value) {
	
} else {
	curr = curr.next;
}
	}
  }
}
 
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(2);
let n5 = new Node(1);
 
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
 
dedup (n1);
