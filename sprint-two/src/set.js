var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set._size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = item;
    this._size++;
  }
};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * O(n)
 */
