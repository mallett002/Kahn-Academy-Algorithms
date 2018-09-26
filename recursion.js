// Make 2 new variables. Result and i
// result is our result, and starts at 1.
// i is the number to multiply result with, also starts at 1
// each iteration, i increases, until it reaches "n"
// in each iteration, we multiply result with i, and update result to be the product.
const iterative = (n) => {
    // start off with result as 1
    let result = 1;
    //Loop: start at 1, while less than "n"..
    //.. result = result * i
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    // return the result
    return result;
};

// Recursive Factorial
// If n = 0, then n! = 1; (base case)
// else n is positive
// n! = n * (n - 1)! (recursive case)
const factorial = n => {
    // Base case
    if (n === 0) return 1; // Must eventually reach here
    // Recursive case
    return n * factorial(n - 1);
};

/*RECURSION TO SOLVE ISPALINDROME*/
// Base case: string of 0 or 1 letters is a palindrome
// If has 2 or more letters, recursive case.
// if first and last letters aren't same, not pal

// the process:
// If 1st and last letters differ, not pal
// otherwise, compare first and last letters of string
// if first and last differ, not pal
// otherwise, there the same, so strip them off
// check if remaining string is pal
// repeat until 1 or 0 letters, if reach, is pal.

// Let's do it!
// Returns first char
const firstChar = str => {
    return str.slice(0, 1);
};

// Returns last char of string
const lastChar = str => {
    return str.slice(-1);
};

// Returns string after stripping off first and last
const middleChars = str => {
    return str.slice(1, -1); // Slices of first and last
};

// if pal: true, else false
const isPal = str => {
    // Base case
    if (str.length === 0 || str.length === 1) return true;
    // other base case: 1st and last differ, not pal
    if (firstChar(str) !== lastChar(str)) return false;
    // Recursive case: strip off first and last and check remaining
    return isPal(middleChars(str));
};

isPal("abcedcba");


/*RECURSIVE POWERS*/
// x^n = x to the power of n
// If n is even (x^4): x^n = x^n/2 * x^n/2
// If n is odd (x^3): x^n = x^n-1 * x
// If n is negative x^-2: x^n = 1/x^-n: Turns it positiv bc it's the negation of a negative number

//The Algorithm
// Base case: n = 0, and x^0 = 1
// If n is positive and even, recursively compute y = x^n/2 just once, then..
//      ..x^n = y * y. (Compute x^n/2 recursively just once)
// if n is positive and odd: recursively compute x^n-1 so n is 0 or pos and even..
//      ..then x^n = x^n-1 * x
// If n is negative, recurs compute x^-n so n becomes pos, then..
//      ..x^n = 1/x^-n
const isEven = n => n % 2 === 0;
const isOdd = n => !isEven(n);

const power = (x, n) => {
    // Base case
    if (n === 0) return 1;
    // If n is negative
    if (n < 0) {
        return 1 / power(x, -n);
    }
    // If n is odd: x^n = x^n-1(recurs) * x
    if (isOdd(n)) {
        return power(x, n - 1) * x;
    }
    // If n is even: y = x^n/2, then x^n = y * y
    if (isEven(n)) {
        let y = power(x, n / 2);
        return y * y;
    }
};

power(2, 3);

/*SIERPINSKI GASKET */
// 1- Determine a base case size. If small enough to be that size, fill in the square.
// 2- Otherwise divide the square into upper left, upper right, lower right and lower left squares.
// 3- Recursively solve 3 subproblems: (make 3 recursive calls)
//      -Draw sierpinski gasket in upper left
//      -Draw sierpinski gasket in upper right
//      -Draw sierpinski gasket in lower right

const dim = 240; // newDim will be 240 / 2: 120
const minSize = 8;

const drawGasket = (x, y, dim) => {
    // Base case: Once reaches here, will just color in the squares
    if (dim <= minSize) {
        // fill in the square
        rect(x, y, dim, dim); // function fills in the square
    // Otherwise divide the square into upper left, upper right, lower right and lower left squares
    } else {
        let newDim = dim / 2; // divide it in half --> 120
        drawGasket(x, y, newDim); // draw gasket in upper left
        drawGasket(x + newDim, y, newDim); // draw in upper right
        drawGasket(x + newDim, y + newDim, newDim); // draw in lower right
    }
}

draw = function () {
    background(255, 255, 255);
    fill(255, 255, 0);
    rect(0, 0, dim, dim);
    stroke(0, 0, 255);
    fill(0, 0, 255);
    drawGasket(0, 0, dim);
};

draw();
