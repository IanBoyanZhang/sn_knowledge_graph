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
  // Use a hash for unvisited node
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
  var uid;
  var qid;
  var edgesHash;
  while(queue.length !== 0) {
    qid = find_min(queue, dist);
    uid = queue[qid];
    queue.splice(qid, 1);
    // forEach neighbor v of u:  // where v is still in Q
    edgeHash = graph.getEdgesFromNode(uid);
    console.log(queue);
    Object.keys(edgeHash || {}).forEach(function(elem) {
      console.log(elem);
      // To see if v still in q?
    });
  }
};


var dijkstra_to_target = function(graph, source, target) {
  // unvisited nodes
  // Use a hash for unvisited node
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
  var uid;
  var qid;
  var edgesHash;
  var S = [];   // The set of visited vertices is initially empty
  var new_dist;
  while(queue.length !== 0) {
    qid = find_min(queue, dist);
    uid = queue[qid];
    queue.splice(qid, 1);
    S.push(uid);
    // forEach neighbor v of u:  // where v is still in Q
    edgeHash = graph.getEdgesFromNode(uid);

    Object.keys(edgeHash || {}).forEach(function(v) {
      console.log(v);
      // weighot
      new_dist = edgeHash[v] + dist[uid];
      // To see if v still in q?
      if (new_dist < dist[v]) {
        dist[v] = new_dist;
      }
    });
  }
  return dist;
};



/**
 * O(n)
 *
 */

// TODO: use hashed queue instead of array for check set 
var find_min = function(queue, dist) {
  var i = 0, len = queue.length;
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
dijkstra_to_target(g, 0);
