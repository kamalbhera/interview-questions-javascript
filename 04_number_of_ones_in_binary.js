// runtime => o (log x)

function numberOfOnesInBinary(x) {
    let sum = 0;
    while (x > 0) {
        sum += x & 1;
        x >>= 1;
    }
    return sum;
}

console.log(numberOfOnesInBinary(5));