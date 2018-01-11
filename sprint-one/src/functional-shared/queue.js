var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {}
  someInstance.enqueue = _.extend(enqueue);
  someInstance.dequeue = _.extend(dequeue);
  someInstance.size = _.extend(size);
  return someInstance;
};

let storage = {};
var valueIn = 0;
var valueOut = 0;
var queueMethods = {
queueMethods.enqueue = function(value) {
  if (value) {
    storage[valueIn] = value;
    valueIn++;
  }
}
queueMethods.dequeue = function() {
  if (valueIn - valueOut === 0) {
    return undefined;
  }
  var answer = storage[valueOut];
  delete storage[valueOut];
  valueOut++;
  return answer;
}
queueMethods.size = function() {
  return valueIn - valueOut;
}
};
