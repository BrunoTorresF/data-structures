var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.valueIn = 0;
  this.valueOut = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function (value) {
  if (value) {
    this.storage[this.valueIn] = value;
    this.valueIn++;
  }
};

Queue.prototype.dequeue =  function() {
    if (this.valueIn - this.valueOut === 0) {
      return undefined;
    }
    let answer = this.storage[this.valueOut];
    delete this.storage[this.valueOut];
    this.valueOut++;
    return answer;
  };

  Queue.prototype.size = function() {
    return this.valueIn - this.valueOut > 0 ? this.valueIn - this.valueOut : 0;
  };

var someInstance = new Queue();
