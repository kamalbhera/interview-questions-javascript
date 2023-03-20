//

function compress(s) {
	let output = '';
	let sum = 1;

	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i+1]) {
		  sum++;
		} else {
			output = output + s[i] + sum;
			sum = 1;
		}
	}
  output = output + s[s.length - 1] + sum; // last char
	
	return output.length < s.length ? output : s;
}

console.log(compress('a')); // -> a
console.log(compress('aaa')); // -> a3
console.log(compress('aaabbb')); // -> a3b3