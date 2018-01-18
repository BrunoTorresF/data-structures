var Set = function() {
  var set = Object.create(setPrototype);
  this.storage = []; // fix me
  this.numberofValues = 0;
  return set;
};

var setPrototype = {
  add: function(item) {
    if (this.storage.length > 0) {
      if (this.storage.indexOf(item) < 0) {
        this.storage.push(item);
        this.numberofValues++;
        return true;
      }
    } else {
      return false;
    }
  },

  contains: function(item) {
    return this.storage.indexOf(item);
  },

  remove: function(item) {}
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
