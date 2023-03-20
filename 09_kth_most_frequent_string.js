// what if the k is greater than length of the list?
// o (n log n)
function kthMostFrequentString (words, k) {
	let hashtable = new Map();
	for (let word of words) {
		let x = hashtable.get(word);
		if (!x)
			x = 0;

		hashtable.set(word, ++x);

	}

	var sortedHashtable = new Map([...hashtable.entries()].sort());

	let i = 1;
	for (let [key, value] of sortedHashtable) {
		if (i === k) return key;
		i++;
	}
}

console.log(kthMostFrequentString(['abcde', 'abc', 'abc', 'abcde', 'abc', 'bcd'], 3));
