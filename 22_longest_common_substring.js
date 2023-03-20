/*
Given two strings, write a function that returns the longest common substring.
 
eg.
substring ("ABAB", "BABA") =  "ABA"
 
"ABAB"
 ^
"BABA"
  ^
 
   A  B  A  B
B [0, 1, 0, 1]
A [1, 0, 2, 0]
B [0, 2, 0, 3]
A [1, 0, 3, 0]
 
*/

function longestCommonSubstring(str1, str2) {
    let result = '';
    if (str1.length === 0 || str2.length === 0) return result;

    let cache = [];
    let longest = 0;

    for (let i = 0; i < str1.length; i++) {
        let row = [];

        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {

                if (i !== 0 && j !== 0) {
                    let currentLength = cache[i - 1][j - 1] + 1;
                    row.push(currentLength);
                    if (currentLength > longest) {
                        longest = currentLength;
                        result = str1.substring(i - longest + 1, i + 1);
                    }

                } else {
                    row.push(1);
                }
            }
            else {
                row.push(0);
            }
        }

        cache.push(row);
    }

    //for (let row of cache) console.log(row);

    return result;
}

longestCommonSubstring("ABAB", "BABA");
