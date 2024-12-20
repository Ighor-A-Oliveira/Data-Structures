//Use case: When stack size is variable or large
class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedListStack {
    constructor() {
      this._head = null; // The head of the linked list (top of the stack)
      this._size = 0; // Tracks the size of the stack
    }
  
    // Push an element onto the stack
    push(element) {
      const newNode = new Node(element, this._head); // Create a new node with current head as next
      this._head = newNode; // Update head to point to the new node
      this._size++;
      return this._size;
    }
  
    // Pop the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return undefined; // Return undefined if stack is empty
      }
      const poppedValue = this._head.value; // Store the value of the head
      this._head = this._head.next; // Move head to the next node
      this._size--;
      return poppedValue; // Return the popped value
    }
  
    // Peek at the top element without removing it
    peek() {
      if (this.isEmpty()) {
        return undefined; // Return undefined if stack is empty
      }
      return this._head.value; // Return the value of the head
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this._head === null; // If head is null, the stack is empty
    }
  
    // Get the size of the stack
    size() {
      return this._size;
    }
  
    // Clear all elements from the stack
    clear() {
      this._head = null; // Clear the head, effectively emptying the stack
      this._size = 0;
    }
  
    // Search for an element in the stack
    search(element) {
      let current = this._head;
      let index = 0;
      while (current) {
        if (current.value === element) {
          return index; // Return the index of the first occurrence
        }
        current = current.next;
        index++;
      }
      return -1; // Element not found
    }
  
    // Traverse the stack from top to bottom
    traverse(callback) {
      let current = this._head;
      while (current) {
        callback(current.value, index);
        current = current.next;
      }
    }
  }
  
  module.exports = LinkedListStack;

