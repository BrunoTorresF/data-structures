var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods)
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    if (value) {
      this.storage[this.count] = value;
      this.count++;
    }
  },

  pop: function() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var topElm = this.storage[this.count];
    delete this.storage[this.count];
    return topElm;
  },

  size: function() {
    return this.count > 0 ? this.count : 0;
  }
};
