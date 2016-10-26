/**
 * shortest path algorithm
 * Dijkstra and transitive closure
 *
 */

var Graph = require('./graph').Graph;


/**
 * Build a test graph
 *
 */

console.log(Graph);
var g = new Graph();
for (var i = 0; i < 16; i+=1) {
  g.addNode(i);
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
g.addEdge(0, 1, 1);

/**
 * source: id
 * Without priority queue
 *
 */
var dijkstra = function(graph, source) {
  // unvisited nodes
  var queue = [];
  var dist = [];
  dist[source] = 0;
  var prev = [];
  
  graph.walk(function(v) {
    vid = v.id;
    dist[vid] = Infinity;
    prev[vid] = undefined;
    queue.push(vid);
  });

  dist[source] = 0;
  var u;
  var qid;
  while(queue.length !== 0) {
    qid = find_min(queue);
    u = queue[qid];
    Q.splice(qid, 1);
    // forEach neighbor v of u:  // where v is still in Q
  }
};

/**
 * O(n)
 *
 */
var find_min = function(queue, dist) {
  var i = 0, len = queue.length();
  var min = Infinity;
  var minQId = 0;
  for(; i<len; i+=1) {
    if(dist[queue[i]] < min) {
      minQId = i;
    }
  }
  return minQId;
};

g.walk(function(node) {
  node.value += 1;
});

console.log(g.peek('edges'));
console.log(g.peek('nodes'));


// Testing dijkstra
