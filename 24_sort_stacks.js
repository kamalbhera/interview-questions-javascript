/*
  Given a stack, sort the elements in the stack using no more than one additional stack.
  
  temp = 1, 3
  
  1              1
  3           1  2
  2        1  2  3
  4     1  3  3  4
  -     -  -  -  -
  S1 -> S2 s2 s2 s2
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
        if (this.data.length > 0) return false;
        return true;
    }
}

function sortStack(s1) {
    if (!s1 || s1.isEmpty()) return;

    let s2 = new Stack();
    s2.push(s1.pop());

    while (!s1.isEmpty()) {
        let temp = s1.pop();
        while (!s2.isEmpty() && temp > s2.peak()) {
            s1.push(s2.pop());
        }
        s2.push(temp);
    }

    return s2;
}

let stack = new Stack();
stack.push(4);
stack.push(1);
stack.push(3);
stack.push(2);
console.log(stack.peak());

let sortedStack = sortStack(stack);
console.log(sortedStack.peak());
