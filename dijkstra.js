/**
 * shortest path algorithm
 * Dijkstra and transitive closure
 *
 */

var Graph = require('./graph');


/**
 * Build a test graph
 *
 */

var g = new Graph();
for (var i = 0; i < 16; i+=1) {
  g.addNode();
}

g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);
g.addEdge(0, 1);

var dijkstra = function(Graph, source) {
  var vertex_set = [];

  
};


// Testing dijkstra
