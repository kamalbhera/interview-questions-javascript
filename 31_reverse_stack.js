/*
Given a stack, reverse the items in the stack without using any additional data structures.
 
 1 -> insertAtBottom(1)                     4
 2   -> insertAtBottom(2)                   3
 3    -> insertAtBottom(3)                  2
 4     -> insertAtBottom(4)                 1
 -
 
Time:
insertAtBottom -> o(n)
reverse -> o(n)
=> o(n^2)
 
space:
insertAtBottom -> o(n)
reverse -> o(n) + o(n) = o(2n) -> o(n)
=> o(n^2)
 
*/

class Stack {
    constructor() {
        this.data = [];
    }

    get length() {
        return this.data.length;
    }

    push(input) {
        this.data.push(input);
    }

    pop() {
        return this.data.pop();
    }

    peak() {
        return this.data[this.length - 1];
    }

    isEmpty() {
        return (!this.data.length > 0);
    }
}

function insertAtBottom(stack, x) {
    if (stack.isEmpty()) {
        stack.push(x);
        return;
    }
    let temp = stack.pop();
    insertAtBottom(stack, x);
    stack.push(temp);
}

function reverse(stack) {
    if (stack.isEmpty()) return stack;
    let temp = stack.pop();
    reverse(stack);
    insertAtBottom(stack, temp);
    return stack;
}


let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);
console.log(reverse(stack));
 
