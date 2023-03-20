/*
  Given an array write a function to find any sub-array that
  sums to zero, if one exists.
  
  eg.
  
  zeroSum({1, 2, -5, 1, 2, -1}) => [2, -5, 1, 2]
  
  {1, 2, -5, 1, 2, -1}
   0  1  3  -2 -1   1   0
      ^  -   -  -   ^  looking for duplicate in sums
      [<       >]      if we find a duplicate it means the     
                       previous item makes our sum ZERO
*/

function zeroSum(arr) {
    let sums = new Map();

    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {

        let lookup = sums.get(sum); // get the sum index

        if (!lookup && i === arr.length) {
            return null;
        } else if (!lookup) { // if there the sum doesn't exist in the sums
            sums.set(sum, i);
            sum += arr[i];
        } else { // if the sum is already exists in the sums
            return arr.slice(lookup, i);
        }
    }

    return null;
}

console.log(zeroSum([1, 2, -5, 1, 2, -1]));
