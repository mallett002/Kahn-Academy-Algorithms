/*INSERTION SORT 
IF item <= key insert
If item > key, slide item to right
*/

/*
- Move items greater than value to the right
- Start at rightIndex
- Stop when find an item less than or equal to value
- Or stop when reaches beginning of the array (far left)
- Once makes room for value, write value into that spot in the array

*/
// Will insert the value in correct sorted spot in the array
const insert  = (array, rightIndex, value) => {
    // start a currentIndex variable to be able to access / set inside the loop
    let currentIndex;
    // Loop backwards, starting at rightIndex, while value <= array[currentIndex]
    for (currentIndex = rightIndex; currentIndex > 0 && array[currentIndex - 1] > value; currentIndex--) {
        // each iteration, assign array[currentIndex] to be the item to the left
        array[currentIndex] = array[currentIndex - 1];
        // this scoots the one to the left, to the right one spot
    }
    // After looping, insert the value to the right of the array[currentIndex]
    array[currentIndex] = value; 
};

const array = [3, 5, 7, 11, 13, 2, 9, 6];

/*Insertion sort psuedocode*/
// 1- call insert to insert el at index 1 into sort sub arr at index 0
// 2- call insert to insert el at index 2 into sort sub arr in indices 0 - 1
// 3- call insert to insert el at index 3 into sort sub arr in indices 0 - 2
// 4- continue doing that
// 5- call insert to insert el that starts at index n - 1 into sorted sub arr in indices (0) - (n - 2)

// loop over array, inserting each new item into the subarray b4 the new item
const insertionSort = (array) => {
    // loop over the array
    for (let i = 0; i < array.length; i++) {
        // call insert on each item in the array, starting at the first one
        insert(array, i, array[i]);
        // to start array is whole array, 0 is rightIndex, array[i] is the value to insert
    }
    return array;
};
 
document.getElementById("output").textContent = insertionSort(array);

console.log(
    insertionSort(array)
);