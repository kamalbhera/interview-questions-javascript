/*
Given a list of bytes a, each representing one byte of a larger
integer (ie. {0x12, 0x34, 0x56, 0x78} representing the integer
0x12345678), and an integer b, find a % b.

mod({0x03, 0xED, 10}) => 5
0x03ED

long division :

   012
12/152
  -0 (1 / 12 = 0) => 0 * 12 = 0
   15 (15 / 12 = 1) => 1 * 12 = 12
  -12
    32 (32 / 12 = 2) => 2 * 12 = 24
   -24
    8 => final mod
------------------------------
    152 / (12 = 12 * 12) + 8
    
    Key :
    Go through the numbers, digit by digit, each round
    multiply previous division by ten and to next digit
*/

const assert = (actual, expected, testName) => {
    if (actual === expected) {
        return `\u2713 PASSED => ${actual} === ${expected}`;
    } else {
        return `\u26D4 FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
    }
};

function mod(a, b) {
    let m = 0;
    for (let i = 0; i < a.length; i++) {
        m <<= 8;
        m += (a[i] & 0xFF);
        m %= b;
    }

    return m;
}

let testCase1 = mod([0x03, 0xED], 10);
console.log(assert(testCase1, 5, 'mod'));

let testCase2 = mod([0x03, 0xED], 10);
console.log(assert(testCase2, 2, 'mod'));
