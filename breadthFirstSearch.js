// Each vertex assigned:
    // 1- distance from the source
    // 2- predecessor vertex, or null if none

// Determine if vertex has been visited:
//  - vertex's distance is null until visited

// Keep track of vertices that have been visited to, but not visited from
// Queue: first in, first out
//      enqueue(obj): inserts an object into the queue
//      dequeue(): removes and returns the obj that has been in the longest
//      isEmpty(): true or false

// When first visit a vertex, enqueue it
// Dont enqueue verticies that have already been visited
// dequeue it, then look from it

// Breadth First Search function: searches a graph and returns an array of objs desribing each vertex
// vertex "v" objs distance property from the source
// vertex "v" objs predecessor property = v's predecessor
// If no path from source to v, distance and predecessor = null
// Source's predecessor = null

// A Queue obj for queue-like functionality over arrays
let Queue = function() {
    this.items = [];
};

// Put objs in the queue
Queue.prototype.enqueue = function(n) {
    this.items.push(n);
};

// Remove and return item from the queue
Queue.prototype.dequeue = function() {
    // returns 1st item (One in the longest)
    return this.items.shift();
};

// True or false if Queue is empty
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

// Takes in a graph "array", and a source "number"
// Returns array of objects describing each vertex: [{distance: _, predecessor: _ }]
const doBFS = (graph, source) => {
    // will hold objs of data for each vertex. Will return this array later
    let bfsInfo = [];

    // Loop over graph indices
    for (let i = 0; i < graph.length; i++) {
        // Create an obj of data for each item in the graph
        bfsInfo[i] = {
            distance: null,
            predecessor: null
        };
    }

    // Set index of "source" to have a distance of 0
    bfsInfo[source].distance = 0;

    // Start a new Queue 
    let queue = new Queue();
    // enqueue the source to start
    queue.enqueue(source);

    // Traverse the graph. While queue isn't empty
    while (!queue.isEmpty()) {
        // will grab the one that's been in the longest
        let u = queue.dequeue(); // u is 3 to start off
        // for each neighbor v of u that hasn't been visited
        for (let i = 0; i < graph[u].length; i++) {
            let v = graph[u][i];
            // check if neighbor has been visited. "null until visited"
            if (bfsInfo[v].distance === null) {
                // set distance to 1+ vertex's distance
                bfsInfo[v].distance = bfsInfo[u].distance + 1;
                // set predecessor to vertex
                bfsInfo[v].predecessor = u;
                // enqueue v
                queue.enqueue(v);
            }
        }
    }
    return bfsInfo;
};


// Graph is an adjacency list
// each index is a vertex
// shows the neighbors of each vertex
const adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
];
const bfsInfo = doBFS(adjList, 3);
console.log(bfsInfo);