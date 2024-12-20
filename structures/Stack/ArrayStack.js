//Use Case:	When stack size is known beforehand/small
//Stack: last in, first out
class ArrayStack {
  constructor() {
    // Private
    this._collection = [];
  }

  // Push an element onto the stack
  push(element) {
    this._collection.push(element);
    return this._collection.length;
  }

  // Pop the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return undefined; // return undefined if stack is empty
    }
    return this._collection.pop();
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return undefined; // return undefined if stack is empty
    }
    return this._collection[this._collection.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this._collection.length === 0;
  }

  // Get the size of the stack
  length() {
    return this._collection.length;
  }

  // Clear all elements from the stack
  clear() {
    this._collection = [];
  }

  // Return the underlying array for direct access if needed
  getArray() {
    return this._collection;
  }

  // Iterate over the stack from top to bottom
  traverse(callback) {
    for (let i = this._collection.length - 1; i >= 0; i--) {
      callback(this._collection[i], i);
    }
  }

  // Search for an element in the stack
  search(element) {
    for (let i = this._collection.length - 1; i >= 0; i--) {
      if (this._collection[i] === element) {
        return i; // return the index of the first occurrence
      }
    }
    return -1; // element not found
  }
}


module.exports = ArrayStack;

