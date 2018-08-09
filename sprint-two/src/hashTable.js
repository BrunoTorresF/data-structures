var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var buckket = this._storage[index];
  if (!bucket) {
    var bucket = [];
    this._storage[index] = bucket;
  }
  var override = false;
  //iterate through the bucket and find an item that looks the same as the other
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      tuple[i] = value;
      override = true;
    }
  }

  if (!override) {
    bucket.push([key, value]);
    this._count++;
    //always countercheck the limit of the bucket
    if (this._count > this._limit * 0.75) {
      this.resize(this._limit * 2);
    }
  }
  return this;
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[index];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[index];
  var tuple;
  //iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    //check to see if key is inside bucket
    if (bucket[i][0] === key) {
      tuple = i;
    }
  }
  bucket.splice(tuple, 1);
  this._storage[(index, bucket)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
