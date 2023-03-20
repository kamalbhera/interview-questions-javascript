// given a linked list, write a function to detrtmine whether the list
// is a palindrome

class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {

	constructor () {
		this.head = null;
	}

	push (val) {

		if(!this.head) {
			this.head = new Node(val, null);
		} else {

			let current = this.head;

			while(current.next) {
				current = current.next;
			}

			current.next = new Node(val, null);
		}
	}
}

palindrome = (n) => {
	let curr = n;
	let runner = n; 
	let stack = [];

	while (runner && runner.next) {
		stack.push(curr.value);
		curr = curr.next;
		runner = runner.next.next;
	}

	if (runner) curr = curr.next; // odd number of items

	while (stack.length > 0) {
		let value = stack.pop();
		if (value !== curr.value) return false;
		curr = curr.next;
	}

	return true;
}

let ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);

let ll2 = new LinkedList();
ll2.push(1);
ll2.push(2);
ll2.push(1);

console.log(palindrome(ll.head)); // -> false
console.log(palindrome(ll2.head)); // -> true
