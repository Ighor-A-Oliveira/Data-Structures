//Use case: Applications needing sorted data (like priority queues, ordered lists)
class Node {
    constructor(data) {
      this.data = data;    // Node value
      this.next = null;     // Pointer to the next node
    }
  }
  
  class SortedSinglyLinkedList {
    constructor() {
      this.head = null;     // Head of the list
      this.size = 0;        // Size of the list
    }
  
    // Insert a node maintaining sorted order
    insert(data) {
      const newNode = new Node(data);
      
      if (!this.head || this.head.data >= data) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next && current.next.data < data) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
      
      this.size++;
    }
  
    // Remove a node by its value
    remove(data) {
      if (!this.head) return null;
  
      if (this.head.data === data) {
        this.head = this.head.next;
        this.size--;
        return data;
      }
  
      let current = this.head;
      while (current.next && current.next.data !== data) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
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
  