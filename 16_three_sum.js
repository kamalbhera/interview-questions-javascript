/*
Given a list of integers, write a function that returns sets of three numbers in the list, a,b,c so that a + b + c == 0

threeSum( [-1, 0, 1, 2, -1, -4] );
[-1, -1, 2]
[-1,  0, 1]

 - Weather all the numbers are unique or not?
 - Can we have duplicate outputs?

[-4, -1, -1, 0, 1, 2]
  ^   ^            ^
  i   start        end
*/

function threeSum (arr) {
	let result = [];
	
	arr.sort();

	for (var i = 0; i < arr.length - 3; i++) {
		if (i === 0 || arr[i] > arr[i - 1]) {
			let start = i + 1;
			let end = arr.length -1;

			while (start < end) {
				if (arr[i] + arr[start] + arr[end] === 0) {
					result.push([arr[i], arr[start], arr[end]])
				}

				if (arr[i] + arr[start] + arr[end] < 0) {
					let currentStart = start;
					while (arr[start] === arr[currentStart] && start < end) {
						start++;
					}
				} else {
					let currentEnd = end;
					while (arr[end] === arr[currentEnd] && start < end) {
						end--;
					}
				}
			}
		}
	}

	return result;
}

console.log(threeSum( [-1, 0, 1, 2, -1, -4] ));