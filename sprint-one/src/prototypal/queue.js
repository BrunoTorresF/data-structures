var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.valueIn = 0;
  someInstance.valueOut = 0;
  someInstance.storage = {};

return someInstance;
};

var queueMethods = {
enqueue: function (value) {
  if (value) {
    this.storage[this.valueIn] = value;
    this.valueIn++;
  }
},

dequeue: function() {
    if (this.valueIn - this.valueOut === 0) {
      return undefined;
    }
    let answer = this.storage[this.valueOut];
    delete this.storage[this.valueOut];
    this.valueOut++;
    return answer;
  },

  size: function() {
    return this.valueIn - this.valueOut > 0 ? this.valueIn - this.valueOut : 0;
  }
};
