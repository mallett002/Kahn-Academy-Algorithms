// Start at index p, go through index r
// Base case: Divide-conquer-combine when p < r

// Example:
const nums = [14, 7, 3, 12, 9, 11, 6, 2];
// p = index 0, r = index 7
// Has at least 2 elements, so not a base case
// Divide: Math.floor(n / 2), so q = 3 
// Conquere: Sort [0..3] and [4..7]
// Now, p = 0, r = 3, q = 1
// Combine the 2 sorted subarrays

/*SORTING the subarrays-------------------*/
// If subarray has 0 or 1 elements, it's already sorted. 
// Else, divide and conquer

const mergeSort = (array, p, r) => {
    // Base case: While index p is less than the last index, r
    if (p < r) {
        // get halfway point (Divide)
        let q = Math.floor((p + r) / 2);
        // sort [p..q]
        mergeSort(array, p, q);
        // sort [q+1..r] (Conquer)
        mergeSort(array, q + 1, r); // conquer
        // Combine 2 sorted subarrays
        merge(array, p, q, r);
    }
};

// Merge part
// 1 Copy each element in array[p..r] into either loHalf or highHalf
// 2 While loHalf and highHalf still have some elements, compare first 2 untaken..
// .. elements and copy smaller one back into array
// 3 When either lowHalf or highHalf is empty, copy remaining elements from other..
// ..temporary array back into array

// Merge function. Merge sorted subarrays in array[p..q] and array[q+1..r] into [p..r]
const merge = (array, p, q, r) => {
    // 2 temporary arrays
    let lowHalf = []; // array[p..q]
    let highHalf = []; // array[q+1..r]

    // k is position in array that we will copy into
    let k = p; // Start k as array[0]
    let i; // position in lowHalf
    let j; // position in highHalf
    // Get first half elements, and copy them into lowHalf
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k]; // Assign lowHalf[i] to be what is in array[k]
    }
    // Get second half elements, and copy them into highHalf
    for (j = 0; j <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p; // start of array
    i = 0;
    j = 0;
    // Repeatedly compare the lowest untaken element in..
    // ..lowHalf with the lowest untaken element in highHalf..
    // ..and copy the lower of the two back into array, starting at array[p]
    
    // While lowhalf and highhalf still some elements
    while (i < lowHalf.length && j < highHalf.length) {
        // compare their values
        if (lowHalf[i] < highHalf[j]) {
            // if lowHalf val is lower, assign it into array
            array[k] = lowHalf[i];
            i++;
            // if highHalf is lower, assign it into array
        } else {
            array[k] = highHalf[j];
            j++; 
        }
        // increment the k
        k++;
    }

    // When either lowHalf or highHalf is empty, copy remaining subarry into array
    while (i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }

    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }
};
