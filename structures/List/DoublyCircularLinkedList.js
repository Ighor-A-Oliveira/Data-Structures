//Use case: Efficient traversal in circular structures, Applications like advanced buffers and resource scheduling
class Node {
    constructor(data) {
      this.data = data;       // Node value
      this.next = null;        // Pointer to the next node
      this.prev = null;        // Pointer to the previous node
    }
  }
  
  class DoublyCircularLinkedList {
    constructor() {
      this.head = null;       // Points to the first node
      this.tail = null;       // Points to the last node
      this.size = 0;          // Size of the list
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = this.tail = newNode;
        newNode.next = this.head;
        newNode.prev = this.tail;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        newNode.next = this.head;
        this.tail = newNode;
      }
      this.head.prev = this.tail; // Ensure the head points to the tail
      this.size++;
    }
  
    // Add a node to the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = this.tail = newNode;
        newNode.next = this.head;
        newNode.prev = this.tail;
      } else {
        newNode.next = this.head;
        newNode.prev = this.tail;
        this.head.prev = newNode;
        this.tail.next = newNode;
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
        current.next.prev = newNode;
        current.next = newNode;
        newNode.prev = current;
        this.size++;
      }
    }
  
    // Remove a node by its value
    remove(data) {
      if (!this.head) return null;
  
      let current = this.head;
      do {
        if (current.data === data) {
          if (current === this.head) {
            this.head = current.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
          } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          this.size--;
          return current.data;
        }
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
        if (this.head === this.tail) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
          this.head.prev = this.tail;
          this.tail.next = this.head;
        }
        this.size--;
        return data;
      } else {
        let current = this.head;
        let i = 0;
        while (i < index) {
          current = current.next;
          i++;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        if (current === this.tail) {
          this.tail = current.prev;
        }
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
        current.prev = next;
        prev = current;
        current = next;
      } while (current !== this.head);
  
      this.head.prev = prev;
      this.head = prev;
      this.tail = current.prev;
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
  