/*
Given two integers, determine whether or not they differ by a single bit.
 
eg.
 
gray(0, 1) = true;
gray(1, 2) = false;
 
0b01
0b10
=> false
 
0b01010101
0b01010101
=> false
 
0b01010101
0b01010001
=> true
 
Solution:
xor : 0b00000100 -> it should be a power of two
 
     x & (x - 1)

*/

function isGray(a, b) {
    let x = a ^ b; // xor
    //console.log(x.toString(2));
    return (x & (x - 1)) === 0;
}

console.log(isGray(0b01010101, 0b01010001));
