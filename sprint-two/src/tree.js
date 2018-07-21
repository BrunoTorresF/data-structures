/*tree is a hierarchical recursive structure
  parent node has multiple child nodes; first node is root

  */
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {
  let child = Tree(value);
  child.parent = this;
  this.children.push(child);
};
//
// treeMethods.contains = function(target) {
//   if (this.value === target) {
//     return true;
//   }
//   return _.some(this.children, function(child) {
//     return child.contains(target)
//   })
//  }
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i += 1) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};
/*
/*
 * Complexity: What is the time complexity of the above functions?
 */
