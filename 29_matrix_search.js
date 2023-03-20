/*
Given a n x m array where all rows and columns are sorted order,
write a function to determine whether the array contains an element x.
[0,   1,  2,  3]
[4,   5,  6,  7]
[8,   9, 10, 11]
[12, 13, 14, 15]

[1, 2, 3, 4]
    ^
brute force : do binary search on each row
O(m * log n)


search(9)

[0,   1,  2,  3]
              ^   9 > 3 => it can not be in this row
[4,   5,  6,  7]
[8,   9, 10, 11]
[12, 13, 14, 15]


[4,   5,  6,  7]
              ^   9 > 7 => it can not be in this row
[8,   9, 10, 11]
[12, 13, 14, 15]


[8,   9, 10, 11]
              ^   9 < 11 && 9 < 15 => it can be in this row but it can not be in this column
[12, 13, 14, 15]

[8,   9, 10]
          ^   9 < 10 && 9 < 14 => it can be in this row but it can not be in this column
[12, 13, 14]

[8,   9]
      ^   9 == 9 => got it
[12, 13]

O(n + m)
*/

function matrixSearch(matrix, x) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
    if (!x) return false;

    let n = matrix[0].length;
    let m = matrix.length;

    let row = 0;
    let column = m - 1;

    while (row < n && column >= 0) {
        //console.log(matrix[row][column]);
        if (matrix[row][column] === x) return true;
        if (matrix[row][column] < x) row++;
        else column--;
    }

    return false;
}

let matrix = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]];
console.log(matrixSearch(matrix, 9));
