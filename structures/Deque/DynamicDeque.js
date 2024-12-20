//Use case: Applications with varying data sizes and frequent insertions/removals
class DynamicDeque {
    constructor() {
      this.data = [];
    }
  
    pushFront(value) {
      this.data.unshift(value);  // Add to front
    }
  
    pushBack(value) {
      this.data.push(value);  // Add to back
    }
  
    popFront() {
      if (this.isEmpty()) return null;
      return this.data.shift();  // Remove from front
    }
  
    popBack() {
      if (this.isEmpty()) return null;
      return this.data.pop();  // Remove from back
    }
  
    peekFront() {
      return this.data[0];  // Return the front item
    }
  
    peekBack() {
      return this.data[this.data.length - 1];  // Return the back item
    }
  
    isEmpty() {
      return this.data.length === 0;
    }
  
    resize(newCapacity) {
      if (newCapacity < this.size()) return null; // Can't shrink below current size
      this.data.length = newCapacity;
    }
  
    size() {
      return this.data.length;
    }
  }
  
  module.exports = DynamicDeque