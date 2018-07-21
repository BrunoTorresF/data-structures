/* Queue is constructor function */
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // define storage, value in, and value out
  var storage = {};
  var valueIn = 0;
  var valueOut = 0;
  // Implement the methods below
  // Create enqueue method, accepts values
  someInstance.enqueue = function(value) {
    // adds value to queue
    if (value) {
      storage[valueIn] = value;
      // count increases by 1
      valueIn++;
    }
  };

  // Create dequeue method
  someInstance.dequeue = function() {
    if (valueIn - valueOut === 0) {
      return undefined;
    }
    //Save last value to storage
    let answer = storage[valueOut];
    //delete last value
    delete storage[valueOut];
    // lowest count increases by 1
    valueOut++;
    // return saved value
    return answer;
  };

  // Create size method
  someInstance.size = function() {
    // returns count minus lowestCount
    return valueIn - valueOut;
  };

  return someInstance;
};
