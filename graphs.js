// Edge list
// array of 2 vertices that are incident
const edgeList = [[0, 1], [0, 6], [0, 8], [1, 4], [1, 6], [1, 9], [2, 4], [2, 6],
    [3, 4], [3, 5], [3, 8], [4, 5], [4, 9], [7, 8], [7, 9]
];

// Adjacency list (Combines adj matrix with edge list)
const graph = [
    [1, 6, 8],
    [0, 4, 6, 9],
    [4, 6],
    [4, 5, 8],
    [1, 2, 3, 5, 9],
    [3, 4],
    [0, 1, 2],
    [8, 9],
    [0, 3, 7],
    [1, 4, 7]
];

const doStuff = n => {
    // lets get the square root of the number
    return Math.sqrt(n);
}

// Example to do something only on each vertex adjacent to vertex i
// Returns a list of the square roots of each number
const useVertex = (i) => {
    let stuffDone = [];
    for (let j = 0; j < graph[i].length; j++) {
        stuffDone.push(doStuff(graph[i][j]));
    }
    return stuffDone;
}

// Or like this:
const useVertex2 = (i) => {
    let vertex = graph[i];
    for (let j = 0; j < vertex.length; j++) {
        doStuff(vertex[j]);
    }
}

console.log(useVertex(0));


/*STORE A GRAPH*/
// Edge list
var edges = [ 
/*0*/   [0, 2], 
/*1*/   [1, 3], 
/*2*/   [2, 3], 
/*3*/   [2, 4], 
/*4*/   [3, 5], 
/*5*/   [4, 5] 
];

// Store "edges" as a adjacency matrix
// if i j is in the graph, 1, else 0
const adjMatrix = [
    [0, 0, 1, 0, 0, 0], /*0 vertex*/
    [0, 0, 0, 1, 0, 0], /*1*/
    [0, 0, 0, 1, 1, 0], /*2*/
    [0, 0, 0, 0, 0, 1], /*3*/
    [0, 0, 0, 0, 0, 1], /*4*/
    [0, 0, 0, 0, 0, 0]  /*5*/
];

// Edges as an Adjacency list
// Stores an array of vertices adjacent to each vertex (i)
const adjList = [
/*0*/ [2],
/*1*/ [3], 
/*2*/ [3, 4],
/*3*/ [5],
/*4*/ [5],
/*5*/ [],
];