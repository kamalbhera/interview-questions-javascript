/*
	Given K sorted arrays, merge them into a single sorted array.
	 
	eg.
	merge([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
	=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

	* simple way is to merge the array and then sort it

	kn * log(kn)

	[1, 4, 7]
	 -  ^
	[2, 5, 8]
	 -  ^
	[3, 6, 9]
	 ^
	1, 2, ...

	good approach is to use priority queue
	=> 
	adding to priority queue -> log n
	removing from a priority queue -> o(1)

	kn * log(k)
*/

function merge (arrays) {
	PriorityQueue pq = new PriorityQueue();

	let size = 0;
	for (var i = 0; i < arrays.length; i++) {
		size += arrays[i].length;
		if (arrays[i].length > 0) {
			pq.add(new QueueNode(i, 0, arrays[i][0]));
		}
	}

	let result = [];
	for (var i = 0; !pq.isEmpty(); i++) {
		n = pq.poll();
		result[i] = n.value;
		let newIndex = n.index + 1;
		if (newIndex < arrays[n.array].length) {
			pq.add(new QueueNode(n.array, newIndex, arrays[n.array][newIndex]))
		}
	}

	return result;
}