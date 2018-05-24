
var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  newBinarySearchTree.value = value;
  return newBinarySearchTree;
};

  BinarySearchTree.prototype.insert = function (value) {
    var newBST = BinarySearchTree(value);

    var add = function(child, node) {
      if (child.value < node.value && node.left === null) {
        node.left = child;
      } else {
        return add(child, node.left);
      }
      if (child.value > node.value && node.value === null) {
        node.right = child;
      } else {
        return add(child, node.right);
      }
    }

    add(newBST, this);
  };

  BinarySearchTree.prototype.contains = function (value) {

  };

  BinarySearchTree.prototype.depthFirstLog = function (cb) {

  };
/*
 * Complexity: What is the time complexity of the above functions?
 */
