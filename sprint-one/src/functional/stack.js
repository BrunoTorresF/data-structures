/*  Stack is constructor function
      create count = 0, create storage object
    define Push method
      adds value into storage, count++
    define Pop method
      Check if stack is empty
        if true, return undefined
      count--, save top element to variable
      delete top element from storage
      return saved element
    define Size method
      returns count
*/

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    if (value) {
      storage[count] = value;
      count++;
    }
  };

  someInstance.pop = function() {
    if (count === 0) {
      return undefined;
    }
    count--;
    var topElm = storage[count];
    delete storage[count];
    return topElm;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
