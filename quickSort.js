// 1- Divide: Choose a pivot as right most element. Make els less or = to pivot to left
//      -Make those greater than or = to the right (partitioning)
// 2- Let q be index where pivot ends up
// 3- Recurs sort the subarrays: array[p..q-1] and array[q+1..r]
// Done

// Base case when have fewer than 2 elements

// Recurs sort subarray: array[p..r] Ex: [6, 3, 5, 2]
const quickSort = (array, p, r) => {
    // if size 0 or 1, already sorted, so nothing needs to be done
    if (p < r) {
        // Divide: q is index where pivot ends up
        let q = partition(array, p, r);
        // Conquer: subarray to the left
        quickSort(array, p, q - 1);
        // Conquer: subarray to the right
        quickSort(array, q + 1, r);
    }
};

/* PARTITIONING: arrange array[p..r] around a pivot*/
// Compare each element, left to right with the pivot
// let q and j = p (beginning)
// Pick the pivot and increment the j
// q: leftmost index of group G, index of pivot
// j: leftmost index of unknown group

// Group L: array[p..q - 1] "Less than pivot"
// Group G: array[q..j - 1] "Greater than pivot"
// Group U: array[j..r - 1] "Unknown- haven't been compared yet"
// Group P: Pivot: array[r]

// 1- Compare a[j] with pivot
//      -if greater, increment j (slides group G over one to the right)
//      -if less or equal to pivot, swap a[j] with a[q] &..
//      ..increment j and q. Moves dividing line of end of L and end of U one to right
// Once we reach pivot (j===r), group U is empty. Swap pivot with leftmost el in G (in bt/w L & G)
// Return index of q

// Swap function
const swap = (array, firstI, secondI) => {
    let temp = array[firstI];
    array[firstI] = array[secondI];
    array[secondI] = temp;
};

const partition = (array, p, r) => {
    let q = p; // Start q at p.
    
    // while i !== r. "While haven't reached the pivot"
    for (let i = 0; i < r; i++) {
        // if array[i] is smaller or equal to pivot
        if (array[i] <= array[r]) {
            // swap i with q and increment q and i
            swap(array, i, q);
            q++;
        }
        // otherwise, just the i is incremented
    }
    // Once unknown group is empty, swap pivot with q and return the index of q
    swap(array, r, q);
    return q;
}
const myArr = [3, 7, 5, 7, 35, 8, 2];

console.log(
    quickSort(myArr, myArr[0], myArr[myArr.length - 1])
);