/* Queue is constructor function
     define storage, count, and lowestCount
   Create enqueue method, accepts values
     adds value to queue
     count increases by 1
   Create dequeue method
     Save last value to storage
     delete last value
     lowest count increases by 1
     return saved value
   Create size method
     returns count minus lowestCount
  */
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var valueIn = 0;
  var valueOut = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (value) {
      storage[valueIn] = value;
      valueIn++;
    }
  };

  someInstance.dequeue = function() {
    if (valueIn - valueOut === 0) {
      return undefined;
    }
    let answer = storage[valueOut];
    delete storage[valueOut];
    valueOut++;
    return answer;
  };

  someInstance.size = function() {
    return valueIn - valueOut;
  };

  return someInstance;
};
