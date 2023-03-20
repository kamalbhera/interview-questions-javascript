/*
Given a linked list where each node has two pointers,
one to the next node and one to a random node in the
list, write a function to clone the linked list.

eg.
1 -> 2 -> 3 -> 4 -> null
v    v    v    v
3    1    3    2

-- 1 --
First solution is "Maping" old and new lists:
{1:1, 2:2, 3:3, 4:4}

1 -> 2 -> 3 -> 4 -> null
v    v    v    v
3


-- 2 --
Second solution is manuplating the original list
1 -> 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> 4 -> null
v    v    v    v    v    v    v    v
3    v    1         3         2
     v
node.random = prev.random.next
1.random = 1.3.3

now even items blong to first list
    odd items blong to second list
    and as we go through the original list we can find the random node and add
    it to the second list

    after that, we need to connect even items and odd items together in order
    to have two separate lists.

*/

class Node {
  constructor () {
    this.next = null;
    this.random = null;
    this.value;
  }
}

let print = (n) => {
  curr = n;
  let result = '';
  let randoms = '';
  while (curr) {
    result += curr.value + ' -> ';
    randoms += curr.random.value + '    ';
    curr = curr.next;
  }
  console.log(result);
  console.log(randoms);
};

function clone (n) {
  if (!n) return n;

  // step 1 : dumplicationg
  let curr = n;
  while (curr) {
    let temp = new Node();
    temp.value = curr.value;
    temp.next = curr.next;
    curr.next = temp;
    curr = curr.next.next; // skip the new node that we just added
  }

  // step 2 : connecting the random nodes
  curr = n;
  while (curr) {
    curr.next.random = curr.random.next;
    curr = curr.next.next;
  }

  // step 3 : split two lists
  let copy = n.next;
  while (n.next) {
    let temp = n.next;
    n.next = n.next.next;
    n = temp;
  }

  return copy;
}

let n1 = new Node();
n1.value = 1;
let n2 = new Node();
n2.value = 2;
let n3 = new Node();
n3.value = 3;
let n4 = new Node();
n4.value = 4;

n1.next = n2;
n1.random = n3;
n2.next = n3;
n2.random = n1;
n3.next = n4;
n3.random = n3;
n4.random = n2;

console.log('copy: ');
let copy = clone(n1);
print(copy);

console.log('original: ');
print(n1);
