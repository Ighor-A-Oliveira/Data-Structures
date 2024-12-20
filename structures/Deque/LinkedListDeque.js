//Use case: Applications with frequent push/pop operations at both ends
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class LinkedListDeque {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    pushFront(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.length++;
    }
  
    pushBack(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.length++;
    }
  
    popFront() {
      if (this.isEmpty()) return null;
      const value = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return value;
    }
  
    popBack() {
      if (this.isEmpty()) return null;
      const value = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return value;
    }
  
    peekFront() {
      return this.head ? this.head.value : null;
    }
  
    peekBack() {
      return this.tail ? this.tail.value : null;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    size() {
      return this.length;
    }
  }
  