/*
Given a string and a dictionary HashSet, write a function to determine the minimum number of characters to delete to make a word.
 
eg.
 
dictionary: [“a”, “aa”,”aaa”]
query: “abc”
 
output: 2
 
      abc
   /   |   \
  ab   ac   bc
 /  \  / \  / \
a   b a   c b  c
 
query: "abc"
dictionary: ["a", "aa", "aaa"]
queue: [bc, ac, ab]
queueElements: [bc, ac, ab]
s: abc
i:0 -> 2
sub: 0,0 + 1,3 -> 0,2 + 3,3
 
Time :
O (n * n-1 * n-2 * ... * 1) = o(n!)
 
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

function deleteToMakeAWord(dictionary, query) {
    let queue = new Queue();
    let queueElements = new Set();

    queue.enqueue(query);
    queueElements.add(query);

    while (!queue.isEmpty()) {
        s = queue.dequeue();
        queueElements.delete(s);

        if (dictionary.has(s)) return query.length - s.length;

        for (let i = 0; i < s.length; i++) {
            let sub = s.substring(0, i) + s.substring(i + 1, s.length);
            if (!queueElements.has(sub) && sub.length > 0) {
                queue.enqueue(sub);
                queueElements.add(sub);
            }
        }
    }

    return -1;
}

let HashSet = new Set();
HashSet.add("a");
HashSet.add("aa");
HashSet.add("aaa");

deleteToMakeAWord(HashSet, "abc");
 
