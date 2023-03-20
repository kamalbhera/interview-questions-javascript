/*
	Given two strings, write a function t0 determine whether thery are anagrams.

	capitalization
	o (n)
*/

function isAnagrams(s1, s2) {
	if (s1.length !== s2.length) return false;
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	let letters = new Map();

	for (let char of s1) {
	  let ascii = char.charCodeAt(0);
	  if (letters.has(ascii)) letters.set(ascii, letters.get(ascii) + 1);
	  else letters.set(ascii, 1);
	}
	
	for (let char of s2) {
	  let ascii = char.charCodeAt(0);
	  letters.set(ascii, letters.get(ascii) - 1);
	}
	
 	for (var [key, value] of letters.entries()) {
  		if (value !== 0) return false;
	}  

	return true;
}

console.log(isAnagrams('', ''));
console.log(isAnagrams('abbb', 'baba'));
console.log(isAnagrams('BANANA', 'banana'));
