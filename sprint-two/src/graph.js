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
var Graph = function(v) {
  this.vertices = [];
  this.edges = [];
  this.numberOfEdges = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.vertices.length; i++) {
    if (node === this.vertices[i]) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let index = this.vertices.indexOf(node);
  if (~index) {
    this.vertices.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let start = this.contains(fromNode)
  return start.edges.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
  this.numberOfEdges++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let edgeStart = this.contains(fromNode);
  let edgeEnd = this.contains(toNode);
  if (edgeStart) {
    this.edges[fromNode].splice(fromNode, -1)
    this.numberOfEdges--
  }
  if (edgeEnd) {
    this.edges[toNode].splice(toNode, -1)
    this.numberOfEdges--
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  if (numberOfEdges === 0) {
    return undefined
  }
  if (numberOfEdges > 0) {
    return cb(this.vertices)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
