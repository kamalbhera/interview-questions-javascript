/*
    Given an unsorted array, find the length of longest
    sequence of consecutive numbers in the array.

    eg.
    consecutive([4, 2, 1, 6, 5])    => [4, 5, 6]
    consecutive([5 ,5, 3, 1])       => [1], [3], or [5]


    Solution:
    [4, 2, 1, 6, 5]

    1) Soring (needs o(n) space which is nt really good)
    [1, 2, 4, 5, 6] <- sorted
    o(n log n)
    o(1)

    2) Hash set
    O(n^2) time
    o(n) space

    3)


*/

function consecutive(a) {
    const values = new Set();
    for (let i of a) {
        values.add(i);
    }

    let max = 0;
    for (let i of values) {
        if (values.has(i - 1)) continue;
        let length = 0;
        while (values.has(i++)) length++;
        max = Math.max(max, length);
    }

    return max;
}


console.log(consecutive([4, 2, 1, 6, 5]));
console.log(consecutive([5 ,5, 3, 1]));
