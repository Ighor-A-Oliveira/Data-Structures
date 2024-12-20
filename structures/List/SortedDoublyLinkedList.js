//Use case: Use cases like storing ordered data for efficient searching, maintaining sorted entries
class Node {
    constructor(data) {
      this.data = data;    // Node value
      this.next = null;     // Pointer to the next node
      this.prev = null;     // Pointer to the previous node
    }
  }
  
  class SortedDoublyLinkedList {
    constructor() {
      this.head = null;     // Head of the list
      this.tail = null;     // Tail of the list
      this.size = 0;        // Size of the list
    }
  
    // Insert a node maintaining sorted order
    insert(data) {
      const newNode = new Node(data);
  
      if (!this.head || this.head.data >= data) {
        if (this.head) {
          this.head.prev = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next && current.next.data < data) {
          current = current.next;
        }
        newNode.next = current.next;
        if (current.next) {
          current.next.prev = newNode;
        }
        current.next = newNode;
        newNode.prev = current;
  
        if (current.next === null) {
          this.tail = newNode; // Update tail if we're at the end
        }
      }
  
      this.size++;
    }
  
    // Remove a node by its value
    remove(data) {
      if (!this.head) return null;
  
      if (this.head.data === data) {
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        this.size--;
        return data;
      }
  
      let current = this.head;
      while (current && current.data !== data) {
        current = current.next;
      }
  
      if (current) {
        current.prev.next = current.next;
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev; // Update tail if removed from the end
        }
        this.size--;
        return data;
      }
  
      return null; // Data not found
    }
  
    // Search for a node by its value
    search(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) return current;
        current = current.next;
      }
      return null; // Data not found
    }
  
    // Print the list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  