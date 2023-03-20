class Node {
  constructor(value, next, max) {
    	this.value = value;
		this.next = next;
		this.oldMax = max;
  }
}

class MaxStack extends LinkedList {

	constructor () {
		this.stack = null;
		this.max = null;
	}

	push (x) {
		let n = new Node();
		n.value = x;

		if (this.stack === null) {
			this.stack = n;
		} else {
			n.next = stack;
			this.stack = n;
		}

		if (this.max === null || n.value > this.max.value) {
			n.oldMax = this.max;
			this.max = n;
		}
	}
	
	pop () {
		if (this.stack === null) throw new Error;

		let n = this.stack;
		this.stack = n.next;

		if (n.oldMax != null) this.max = n.oldMax;

		return n.value;
	}

	max () {
		if (this.max == null) throw new Error;
		return this.max;
	}
}
