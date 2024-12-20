//Use case: Applications like buffering, caches, and round-robin scheduling, Used in situations where nodes form a continuous loop
class Node {
    constructor(data) {
      this.data = data;       // Node value
      this.next = null;        // Pointer to the next node
    }
  }
  
  class SinglyCircularLinkedList {
    constructor() {
      this.head = null;       // Points to the first node
      this.size = 0;          // Size of the list
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;  // Point back to the head
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;  // Close the loop
      }
      this.size++;
    }
  
    // Add a node to the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        newNode.next = this.head;
        current.next = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
    // Insert a node at a specific index
    insertAt(index, data) {
      if (index < 0 || index > this.size) {
        throw new Error("Index out of bounds");
      }
      if (index === 0) {
        this.prepend(data);
      } else if (index === this.size) {
        this.append(data);
      } else {
        const newNode = new Node(data);
        let current = this.head;
        let i = 0;
        while (i < index - 1) {
          current = current.next;
          i++;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
      }
    }
  
    // Remove a node by its value
    remove(data) {
      if (!this.head) return null;
  
      let current = this.head;
      let prev = null;
  
      do {
        if (current.data === data) {
          if (prev === null) {
            this.head = current.next;
            this.tail.next = this.head; // Update the tail's next pointer
          } else {
            prev.next = current.next;
          }
          this.size--;
          return current.data;
        }
        prev = current;
        current = current.next;
      } while (current !== this.head);
  
      return null; // Data not found
    }
  
    // Remove a node at a specific index
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        throw new Error("Index out of bounds");
      }
      if (index === 0) {
        const data = this.head.data;
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        this.head = this.head.next;
        current.next = this.head; // Update the tail's next pointer
        this.size--;
        return data;
      } else {
        let current = this.head;
        let prev = null;
        let i = 0;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        prev.next = current.next;
        this.size--;
        return current.data;
      }
    }
  
    // Search for a node by its value
    search(data) {
      let current = this.head;
      do {
        if (current.data === data) return current;
        current = current.next;
      } while (current !== this.head);
      return null; // Data not found
    }
  
    // Reverse the circular list
    reverse() {
      if (!this.head || this.size <= 1) return;
  
      let current = this.head;
      let prev = null;
      let next = null;
  
      do {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      } while (current !== this.head);
  
      this.head.next = prev; // Update the head's next pointer
      this.head = prev;
    }
  
    // Print the list (forward traversal)
    print() {
      if (!this.head) return;
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  }
  