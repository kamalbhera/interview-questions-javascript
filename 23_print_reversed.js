/*
  Given a linked list, write a function that prints the nodes of the list in reverse order.
  
  eg.
  printReversedList(1->2->3)
  3
  2
  1
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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

    isEmpty() {
        if (this.data.length > 0) return false;
        return true;
    }
}

function printReversedListWithStack(n) {

    let stack = new Stack();

    while (n) {
        stack.push(n.value);
        n = n.next;
    }

    while (stack.length > 0) {
        console.log(stack.pop());
    }
}

function printReversedList(n) {
    if (!n) return;
    printReversedList(n.next);
    console.log(n.value);
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;

printReversedList(n1);
