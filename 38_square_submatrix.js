/*
Given a 2D array of 1s and 0s, find the largest
square subarray of all 1s.

eg.
subarray([1,1,1,0]
         [1,1,1,1]
         [1,1,0,0]) = 2

brute force
go through all the possible subarrays => o(n^3)

Solution:
[1, 1, 1, 0]
[1, 1, 1, 0]
[1, 1, 1, 0]
[0, 0, 0, 0]

Mirrors:
check the size of the square that the current element belongs to.
check it from left and top

[1, 1, 1, 0]
[1, 2, 2, 0]
[1, 2, 3, 0]
[0, 0, 0, 0]

3 -> is surrounded by three 2s then 2 + 1 = 3

Time and Space -> O(n^2)

*/

const assert = (actual, expected, testName) => {
  if (actual === expected) {
    return `\u2713 PASSED => ${actual} === ${expected}`;
  } else {
    return `\u26D4 FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
  }
};

const subarray = (arr) => {
  let x = arr.length;
  if (x === 0) return 0;
  let y = arr[0].length;
  if (y === 0) return 0;

  let max = 0;

  // initialize a 2d array
  let sizes = Array(...Array(x)).map(() => Array(y));


  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      if (i === 0 || j === 0) {
        sizes[i][j] = arr[i][j];
      }else if (arr[i][j] === 1) {
        sizes[i][j] = Math.min(
          sizes[i][j-1],
          sizes[i-1][j],
          sizes[i-1][j-1]
        ) + 1;
      }

      if (sizes[i][j] > max) max = sizes[i][j];
    }
  }

  return max;
};

// TEST CASES

let testcase1 = subarray([
  [1,1,1,0],
  [1,1,1,1],
  [1,1,0,0]]);

console.log(assert(testcase1, 2, 'subarray'));

let testcase2 = subarray([[1, 1, 1, 0],
[1, 1, 1, 0],
[1, 1, 1, 0],
[0, 0, 0, 0]]);

console.log(assert(testcase2, 3, 'subarray'));
