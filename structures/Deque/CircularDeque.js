//Use case: When memory and space efficiency are critical, Cache management, real-time processing, scenarios requiring wrapped-around data handling
class CircularDeque {
    constructor(capacity) {
      this.data = new Array(capacity);
      this.capacity = capacity;
      this.head = 0;
      this.tail = 0;
      this.size = 0;
    }
  
    pushFront(value) {
      if (this.isFull()) return null; // Full, can't push
      this.head = (this.head - 1 + this.capacity) % this.capacity;
      this.data[this.head] = value;
      this.size++;
    }
  
    pushBack(value) {
      if (this.isFull()) return null; // Full, can't push
      this.data[this.tail] = value;
      this.tail = (this.tail + 1) % this.capacity;
      this.size++;
    }
  
    popFront() {
      if (this.isEmpty()) return null;
      const value = this.data[this.head];
      this.head = (this.head + 1) % this.capacity;
      this.size--;
      return value;
    }
  
    popBack() {
      if (this.isEmpty()) return null;
      this.tail = (this.tail - 1 + this.capacity) % this.capacity;
      const value = this.data[this.tail];
      this.size--;
      return value;
    }
  
    peekFront() {
      return this.isEmpty() ? null : this.data[this.head];
    }
  
    peekBack() {
      return this.isEmpty() ? null : this.data[(this.tail - 1 + this.capacity) % this.capacity];
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    isFull() {
      return this.size === this.capacity;
    }
  
    size() {
      return this.size;
    }
  }
  