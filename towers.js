// Base case: n = 1
// Move disks 1 through n - 1 from A to C (subproblem)

//If n = 3
// -Recursively solve subprob (move 1 & 2 from B to spare "A")
//             - Move 1 from B to C, Move 2 from B to A, move 1 from C to A

// If n = 4
// Recurs solve subprob of moving 1 - 3 from A to C (takes 7 times)
// Move disk 4 from A to B
// Recurs solve subprob of moving 1 - 3 from C to B

// So, if n = 1, just move disk 1
// Else, if n >= 2, solve in 3 steps:
// Recurs solve subprob of moving 1 through n - 1 from current to spare peg
// Move disk n from start position to ending up position
// Recurs solve subprob of moving 1 through n - 1 form spare to ending up peg

// Helper functions
// solveHanoi.getSparePeg: returns the spare peg
// hanoi.moveDisk: moves disk from a peg to a peg

// Will move disks fromPeg to the toPeg
const solveHanoi = (numDisks, fromPeg, toPeg) => {
    // Base case: no disks to move
    if (numDisks === 0) return;

    // Recursive case: Move disks on top of bottom disk, to spare peg
    let sparePeg = solveHanoi.getSparePeg(fromPeg, toPeg); // gets the spare peg
    // the recursive call: from the current to the spare
    solveHanoi(numDisks - 1, fromPeg, sparePeg);

    // Move bottom one to the target
    hanoi.moveDisk(fromPeg, toPeg);

    // Recursively move numDisks - 1 from spare to target
    solveHanoi(numDisks - 1, sparePeg, toPeg);
};