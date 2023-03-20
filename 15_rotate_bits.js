/*
	Given a number, write a function to rotate the bit (ie circular shift)
	eg.
	rotate (0xFFFF0000, 8) = 0x00FFFF00

	0xFFFF0000

	Which way you shift it?
	How many bits is the integer?


	0xFABCABAB >> 8 = 0x00FABCAB
	0xFABCABAB << (32 - 8) = 0xAB00000
*/

function rotate(x, N) {
    const BITS_IN_INTEGER = 32;
    return (x >> N | x << (BITS_IN_INTEGER - N))
}

console.log(rotate('0xFFFF0000', 8));