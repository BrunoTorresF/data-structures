/*Graph = set of vertices & edges. Each node is a vertex
  edges are defined by (v1, v2), where v1/v2 are vertices on the graph
  Ordered graphs are also called directed graphs, have arrows between vertices
  path = sequence of vertices in graph such that all vertices are connected by numberOfEdges
    path.length = numberOfEdges from 1st to last vertex
  Building graph class requires Vertex class
    holds all vertices in the graph; require label & wasVisited
  Edges describe structure of the graphs
    can be 0, 1, or many edges linked to a Vertex
    adjacency list/ array of adjacency lists used to represent edges
      edges are stored as vertex-indexed array of lists of vertices adjacent to each Vertex


*/

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
//not passing one test!
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode][toNode] ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 * O(n)
*/
