/**
 * description
 *
 */

// Direct graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
  this._curr_id = 0;
};

Graph.prototype.addNode = function(payload) {
  var node = {
    
  };
  while (this.nodes[this._curr_id] !== undefined) {
    this._curr_id += 1;
  }
  node.id = this._curr_id;
  node.payload = payload;
  this.nodes.push(node);
};

Graph.prototype.addEdge = function(from, to) {
  if (typeof from !== 'number' || typeof to !== 'number') {
    throw Error('From or to is not number');
  }
  if (this.nodes[from] === undefined || this.nodes[to] === undefined) {
    throw Error('from or to are not valid nodes in current graph');
  }
  this.edges[from] = to;
};

/**
 * Mapping from id to nodes
 *
 */
Graph.prototype.id2Nodes = function(id) {
  return this.nodes[id];
};

Graph.prototype.peek = function(attr) {
  return this[attr];
};

exports.Graph = Graph;

/**
 * test
 *
 */
var g = new Graph();
g.addNode();            // 0
g.addNode();            // 1
g.addNode();            // 2
g.addNode();            // 3
var ret = g.peek('nodes');
console.log(ret);
// edges
g.addEdge(0, 3);
g.addEdge(1, 2);
ret = g.peek('edges');
console.log(ret);
