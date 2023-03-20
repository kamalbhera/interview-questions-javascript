// what if the number of items is odd
// L = 1 -> 2 -> 3 -> 4 -> null
// ^
//^
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

splitALinkedList = (list) => {
    if (list === null) return null;
    let runner = list.next;

    while (list) {
        if (runner.next === null) break;
        list = list.next;
        runner = runner.next.next; // run on ahead
    }

    let toReturn = list.next;
    list.next = null;
    return toReturn
};

printLinkedList = (node) => {
    while (node) {
        console.log(node.value);
        node = node.next;
    }
};

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;

let secondHalf = splitALinkedList(n1);
let firstHalf = n1;

console.log('First Half ->');
printLinkedList(firstHalf);
console.log('Second Half ->');
printLinkedList(secondHalf);