/*
  Given two sorted array, A and B, where A is long enough to hold the contents of A and B, write a function to copy the contents of B into A without any buffer or additional memory.
  
  eg.
  A = [1, 3, 5, 0, 0, 0]
  B = [2, 4, 6]
   => [1, 2, 3, 4, 5, 6]
  
  
  [1, 3, 5, 0, 0, 0]
         ^        ^
  [2, 4, 6]
         ^
*/

function mergeArrays(a, b, aLength, bLength) {

    if (aLength + bLength > a.length) throw new Error();

    let aIndex = aLength - 1; // Array A Index
    let bIndex = bLength - 1; // Array B Index
    let mIndex = aLength + bLength - 1; // Merge Index


    while (aIndex >= 0 && bIndex >= 0) {

        if (a[aIndex] > b[bIndex]) {
            a[mIndex] = a[aIndex];
            aIndex--;
        } else {
            a[mIndex] = b[bIndex];
            bIndex--;
        }

        mIndex--;
    }

    // copy the rest of the array B
    while (bIndex >= 0) {
        a[mIndex] = b[bIndex];
        bIndex--;
        mIndex--;
    }

    return a;
}

//
console.log(mergeArrays([1, 3, 5, 0, 0, 0], [2, 4, 6], 3, 3));

// test case that B have some leftovers after fist while loop
console.log(mergeArrays([7, 8, 9, 0, 0, 0], [4, 5, 6], 3, 3));
