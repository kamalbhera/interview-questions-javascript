/*
Implement a stack with basic functionality (push and pop) using queues to store the data.
  
  push (1)
  
  primary = 3 -> 2 -> 1
  secondary = 1 -> 2 -> 3
  
*/

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(input) {
        this.data.push(input);
    }

    dequeue() {
        return this.data.shift();
    }

    isEmpty() {
        return (!this.data.length > 0);
    }
}

class Stack {
    constructor() {
        this.primary = new Queue();
        this.secondary = new Queue();
    }

    push(x) {
        this.secondary.enqueue(x);

        while (!this.primary.isEmpty()) {
            this.secondary.enqueue(this.primary.dequeue());
        }

        // swapping primary and secondary
        let temp = this.primary;
        this.primary = this.secondary;
        this.secondary = temp;
    }

    pop() {
        if (this.primary.length <= 0) return new RangeError();
        return this.primary.dequeue();
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
