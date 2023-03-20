/*
Given two integers, write a function that swaps them without using any temporary variables.

*/

function swap (a, b) {
  /*a = a - b;
  b = b + a;
  a = b - a;*/
  
  /*a = a + b;
  b = a - b;
  a = a - b;*/
  
  a = a ^ b; // ->  9 xor 4 => 13
  b = a ^ b; // -> 13 xor 4 => 9
  a = a ^ b; // -> 13 xor 9 => 4
  
  return [a, b];
}

console.log(swap(9,4));
