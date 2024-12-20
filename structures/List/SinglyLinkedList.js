//Use case: Efficient insertion/deletion at the beginning, Applications like stacks, queues, and maintaining ordered data.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //SinglyLinkedList
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Add a node to the end of the list
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Add a node to the beginning of the list
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      this.size++;
    }
  
    // Remove a node by value
    remove(value) {
      if (!this.head) return null;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        if (!this.head) this.tail = null; // If the list is now empty
        this.size--;
        return value;
      }
  
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next) {
        if (current.next === this.tail) this.tail = current; // Update tail if needed
        current.next = current.next.next;
        this.size--;
        return value;
      }
  
      return null; // Value not found
    }
  
    // Get a node's value at a specific index
    getAt(index) {
      if (index < 0 || index >= this.size) throw new Error("Index out of bounds");
  
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
  
      return current.value;
    }
  
    // Insert a node at a specific index
    insertAt(index, value) {
      if (index < 0 || index > this.size) throw new Error("Index out of bounds");
  
      if (index === 0) return this.prepend(value);
      if (index === this.size) return this.append(value);
  
      const newNode = new Node(value);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
  
      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    }
  
    // Check if the list contains a value
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) return true;
        current = current.next;
      }
      return false;
    }
  
    // Find a node by value (returns the node, not just its value)
    find(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) return current;
        current = current.next;
      }
      return null; // Node not found
    }
  
    // Print the list
    printList() {
      let current = this.head;
      const result = [];
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      console.log(result.join(" -> "));
    }
  
    // Clear the entire list
    clear() {
      this.head = this.tail = null;
      this.size = 0;
    }
  
    // Get the size of the list
    getSize() {
      return this.size;
    }
  }

  module.exports = SinglyLinkedList;
  
  // Example Usage
  const list = new SinglyLinkedList();
  list.append(10);
  list.append(20);
  list.prepend(5);
  list.insertAt(2, 15);
  list.printList(); // Outputs: 5 -> 10 -> 15 -> 20
  list.remove(15);
  list.printList(); // Outputs: 5 -> 10 -> 20
  console.log(list.contains(20)); // Outputs: true
  console.log(list.getAt(1)); // Outputs: 10
  console.log(list.find(20)); // Outputs: Node { value: 20, next: null }
  console.log(list.getSize()); // Outputs: 3
  list.clear();
  list.printList(); // Outputs: (empty list)
  