var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.prototype.insert = function(val) {
  if (val === this.value) {
    new Error('Cannot insert equal value');
  }

  if (val < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(val);
      return;
    } else {
      this.left.insert(val);
      return;
    }
  }

  if (val > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(val);
      return;
    } else {
      this.right.insert(val);
      return;
    }
  }
};
BinarySearchTree.prototype.contains = function(targetValue) {
  if (this.value === targetValue) {
    return true;
  }
  if (this.value < targetValue && this.right) {
    return this.right.contains(targetValue);
  }
  if (this.value > targetValue && this.left) {
    return this.left.contains(targetValue);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb, currentNode) {
  currentNode = currentNode || this;

  cb(currentNode.value);

  if (currentNode.left) {
    currentNode.depthFirstLog(cb, currentNode.left);
  }
  if (currentNode.right) {
    currentNode.depthFirstLog(cb, currentNode.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * O(n)
 */
