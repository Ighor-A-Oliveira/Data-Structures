//USe case: Small to medium-sized collections where simple and contiguous storage is acceptable
class ArrayDeque {
    constructor() {
      this.data = [];
    }
  
    pushFront(value) {
      this.data.unshift(value);  // Add to the front
    }
  
    pushBack(value) {
      this.data.push(value);  // Add to the back
    }
  
    popFront() {
      if (this.isEmpty()) return null;
      return this.data.shift();  // Remove from the front
    }
  
    popBack() {
      if (this.isEmpty()) return null;
      return this.data.pop();  // Remove from the back
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
  
    size() {
      return this.data.length;
    }
  }
  