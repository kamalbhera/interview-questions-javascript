/*
Given an unsorted linked list, write a function to remove all the duplicates.
 
eg.
dedup(1 -> 2 -> 3 -> 2 -> 1) = 1 -> 2 -> 3
 
Time : o(n)
Space: o(n)
 
*/
 
class Node {
	constructor (value) {
	  this.value = value;
	  this.next = null;
  }
}
 
function dedup (n) {
  if (n === null) return;
  
  let lookup = new Set();
  let prev = null;
  while (n) {
    if (!lookup.has(n.value)) {
      //console.log(n.value);
      lookup.add(n.value); 
      prev = n;
    } else {
      prev.next = n.next;
    }
    n = n.next;
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
