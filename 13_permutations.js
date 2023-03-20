/*
Given a string, print all permutations of a given string.

Input:

The first line of input contains an integer T denoting the number of test cases.
Each test case contains a single string in capital letter.

Output:

Print all permutations of a given string with single space and all permutations should be in lexicographically increasing order.

Constraints:

1 ≤ T ≤ 10
1 ≤ size of string ≤ 5

Example:

Input:
ABC

Output:
ABC ACB BAC BCA CAB CBA 
*/

function permutations(str) {
  var a = str.split('');
  var results = [];
  
  swap = (a, i, j) => {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  
  permute = (a, start) => {
    if (start >= a.length) {
      results.push(a.slice());
    } else {
      for (var i = start; i < a.length; i++) {
        swap(a, start, i);
        permute(a, start + 1);
        swap(a, start, i);
      }
    }
  }
  
  permute(a, 0);
  return results;
}

let result = permutations('abc');
console.log(result);

/*
OR:

function stringPermutations(str) {
  var a = str.split('');
  var results = new Set();
  
  swap = (a, i, j) => {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  
  permute = (a, start) => {
    if (start >= a.length) {
      results.add(a.join(''));
    } else {
      for (var i = start; i < a.length; i++) {
        swap(a, start, i);
        permute(a, start + 1);
        swap(a, start, i);
      }
    }
  }
  
  permute(a, 0);
  return Array.from(results).sort();
}

*/