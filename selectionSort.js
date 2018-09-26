const animals = ["gnu", "zebra", "antelope", "aardvark", "yak", "iguana"];
animals.sort();
console.log(animals); // -> puts em en alphabetic order

//SWAP FUNCTION--------------------
const testArray = [7, 9, 4];

const swap = (array, firstIndex, secondIndex) => {
    // take first item out of the list and hold onto it:
    let temp = array[firstIndex];
    // assign first index to be the one in the second index:
    array[firstIndex] = array[secondIndex]; // 9
    // assign second in to be the one that was in the firstIndex
    array[secondIndex] = temp; // 7
};



/*Pseudocode
1- find smallest card. Swap it with the first card
2- Find the 2nd smallest card. Swap it with the second card.
3- Find the 3rd smallest card. swap it with the 3rd card.
4- Repeat finding next smallest card, and swapping it into the correct pos till..
    ..it's all sorted.
*/
const array = [18, 6, 66, 44, 9, 22, 14];

// Finds index of the next smallest value
const indexOfMin = (array, startIndex) => {
    let minValue = array[startIndex]; // first min val is startIndex value
    let minIndex = startIndex;

    // Loop over next items in the array
    for (let i = startIndex + 1; i < array.length; i++) {
        // update minValue and minIndex as needed
        if (array[i] < minValue) {
            minValue = array[i] // set minValue to be that value
            minIndex = i; // get it's index
        }
    }
    return minIndex; // returns the found minIndex
};


/*SELECTION SORT ALGORITHM-----------------------
-Loops over positions in the array.
-At each position, it finds the index of the min value in 
subarray starting at that position.
-Then swaps the values at the position and the min value index
*/
const numbers = [22, 11, 99, 88, 9, 7, 42];

// swap: Swaps the position of 2 elements
// indexOfMin: returns index of next smallest value

const selectionSort = array => {
    // Loop over entire array
    for (let i = 0; i < array.length; i++) {
        // swap current with the next lowest
        // swap(array, firstIndex, secondIndex) & will swap locations
        swap(array, i, indexOfMin(array, i));
    }
    return array;
};

const result = selectionSort(numbers);
console.log("selectionSort:",result);




// This one works too, but seems like it shouldn't...
const pushSort = (array) => {
    let pushed = [];
    for (let i = 0; i < array.length; i++) {
        // First off, put the first item in to get it started:
        if (i === 0) pushed.push(array[i]);
        // Then, if # is less than the last one, put it ahead of it
        else if (array[i] < array[i - 1]) pushed.unshift(array[i]);
        // otherwise just put it after it
        else pushed.push(array[i]);
    }
    return pushed;
}

console.log("pushed array:", pushSort(numbers));