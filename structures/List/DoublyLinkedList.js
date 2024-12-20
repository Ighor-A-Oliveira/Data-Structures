//Use case: Efficient insertion/deletion at both ends, Applications requiring efficient traversal in both directions, like browser history, file systems
class Node {
    constructor(data) {
      this.data = data;       // Value of the node
      this.next = null;       // Pointer to the next node
      this.prev = null;       // Pointer to the previous node
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;       // The first node
      this.tail = null;       // The last node
      this.size = 0;          // Size of the list
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {       // If the list is empty
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Add a node to the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {       // If the list is empty
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
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
        return;
      }
      if (index === this.size) {
        this.append(data);
        return;
      }
      const newNode = new Node(data);
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
      this.size++;
    }
  
    // Remove a node by its value
    remove(data) {
      if (!this.head) return null;
  
      let current = this.head;
      while (current) {
        if (current.data === data) {
          if (current === this.head) {
            this.head = current.next;
            if (this.head) this.head.prev = null;
          } else if (current === this.tail) {
            this.tail = current.prev;
            if (this.tail) this.tail.next = null;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          this.size--;
          return current.data;
        }
        current = current.next;
      }
      return null; // Data not found
    }
  
    // Remove a node at a specific index
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        throw new Error("Index out of bounds");
      }
      if (index === 0) {
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null;
        this.size--;
        return data;
      }
      if (index === this.size - 1) {
        const data = this.tail.data;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return data;
      }
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
      this.size--;
      return current.data;
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
  
    // Reverse the list
    reverse() {
      let current = this.head;
      let temp = null;
      this.tail = this.head;
  
      while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }
  
      if (temp) {
        this.head = temp.prev;
      }
    }
  
    // Print the list (forward traversal)
    printForward() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log("Forward:", result.join(" -> "));
    }
  
    // Print the list (backward traversal)
    printBackward() {
      const result = [];
      let current = this.tail;
      while (current) {
        result.push(current.data);
        current = current.prev;
      }
      console.log("Backward:", result.join(" -> "));
    }
  
    // Get the size of the list
    getSize() {
      return this.size;
    }
  
    // Check if the list is empty
    isEmpty() {
      return this.size === 0;
    }
  }
  