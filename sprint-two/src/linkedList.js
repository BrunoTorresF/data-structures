/*New linked list only has head, tail; both null
  Add elements toTail: tail points to element, last element points to new elements
    if list is empty, list.head = new node; list.tail = head
    else, last node (aka this.tail) next pointer = new node
    tail pointer switches to created node
  Removing head, delete element, head points to next element
    Don't explicitly delete element, only change pointer
  Contains = traverse through list, from head to tail, applying truth test
    is list.head equal to target, if not return false
    if yes, return true
    continue if this.tail.next is not null
*/

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    if (!this.head) {
      return undefined;
    } else {
      let oldHead = this.head.value;
      this.head = this.head.next
      return oldHead;
    }
  };

  list.contains = function(target) {
    let testNode = this.head;
    while (testNode) {
      if (testNode.value === target) {
        return true;
      }
      testNode = testNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
