class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    push(val) {

        if (!this.head) {
            this.head = new Node(val, null);
        } else {

            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = new Node(val, null);
        }
    }

    findNthToLast(n) {
        let curr = this.head;
        let follower = this.head;

        for (let i = 0; i < n; i++) {
            if (curr === null) return new Node(null, null);
            curr = curr.next;
        }

        while (curr.next !== null) {
            curr = curr.next;
            follower = follower.next;
        }

        return follower;
    }
}


let ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

console.log(ll.findNthToLast(1).value);
