// Binary Search
/*
1- let min = 0 and max = number of items
2- guess = average of max and min rounded down
3- if array[guess] === target, stop. Return guess
4- if guess was too low (array[guess] < target) set min = guess + 1
5- otherwise, was too high. set max = guess - 1.
6- go back to step 2

1 - 100. (min - max)
guess = 50 -> too low --> 51 - 100
*/
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
/* 
inputs = array
n = number of elements in array
target = number looking for
output = index in array of target

If target isn't in array
Once max < min, it isn't in there.

1- let min = 0; max = n - 1 (n-1 bc of 0 index)
2- if max < min, stop: target isn't present in array. return -1.
3- guess = ave of max and min rounded down
4- if array[guess] === target, return guess
5- if array[guess] < target (too low), set min = guess + 1
6- otherwise (was too high), set max = guess - 1
7- go back to step 2
*/
const doSearch = (array, targetValue) => {
	let min = 0; // index 0
	let max = array.length - 1; // last index
    let guess; // guessing an index
    let count = 0;
    while(min <= max){ 
        guess = Math.floor((max + min) / 2);  // half way between the 2
        count++;
        console.log(count);
        if (array[guess] === targetValue) return guess;  
        else if (array[guess] < targetValue) min = guess + 1;
        else max = guess - 1; // otherwise it's larger 
    }   
	return -1;
};

let result = doSearch(primes, 73);
console.log(result);
