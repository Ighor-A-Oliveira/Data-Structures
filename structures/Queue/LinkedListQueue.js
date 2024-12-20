//Use case: Real-time systems, multi-threading, asynchronous tasks.
class Node {
    constructor(value) {
        this.value = value;  // Value of the node
        this.next = null;     // Pointer to the next node, initially null
    }
}

class LinkedListQueue {
    constructor() {
        this.frontNode = null; // Front node of the queue
        this.rearNode = null;  // Rear node of the queue
        this._size = 0;        // Number of elements in the queue
    }

    // Adds an element to the rear of the queue
    enqueue(element) {
        const newNode = new Node(element); // Create a new node with the given element
        if (this.isEmpty()) {
            // If the queue is empty, set both frontNode and rearNode to the new node
            this.frontNode = newNode;
            this.rearNode = newNode;
        } else {
            // If the queue is not empty, link the new node to the current rear
            this.rearNode.next = newNode;
            this.rearNode = newNode; // Update rearNode to the new node
        }
        this._size++; // Increment the size of the queue
    }

    // Removes and returns the front element of the queue
    dequeue() {
        if (this.isEmpty()) return null; // Return null if the queue is empty
        const dequeuedValue = this.frontNode.value; // Get the front element
        this.frontNode = this.frontNode.next; // Move the front pointer to the next node
        if (this.frontNode === null) {
            // If the queue becomes empty after dequeue, reset the rearNode to null
            this.rearNode = null;
        }
        this._size--; // Decrement the size of the queue
        return dequeuedValue; // Return the dequeued value
    }

    // Returns the front element of the queue without removing it
    front() {
        return this.frontNode ? this.frontNode.value : null; // Return front node's value or null
    }

    // Returns the current size of the queue
    size() {
        return this._size;
    }

    // Checks if the queue is empty
    isEmpty() {
        return this.frontNode === null; // Queue is empty if frontNode is null
    }

    // Prints the elements of the queue
    print() {
        let current = this.frontNode; // Start from the front node
        const elements = [];
        while (current) {
            elements.push(current.value); // Add current node's value to the elements array
            current = current.next;       // Move to the next node
        }
        console.log(elements); // Log the elements
    }

    // Clears the queue
    clear() {
        this.frontNode = null; // Reset frontNode to null
        this.rearNode = null;  // Reset rearNode to null
        this._size = 0;        // Reset size to 0
    }

    // Checks if the queue contains a specific element
    contains(element) {
        let current = this.frontNode; // Start from the front node
        while (current) {
            if (current.value === element) {
                return true; // Return true if the element is found
            }
            current = current.next; // Move to the next node
        }
        return false; // Return false if the element is not found
    }

    // Returns the element at the specified index
    peek(index) {
        if (index < 0 || index >= this._size) {
            throw new Error('Index out of bounds'); // Throw error if index is invalid
        }
        let current = this.frontNode;
        for (let i = 0; i < index; i++) {
            current = current.next; // Move to the specified index
        }
        return current.value; // Return the value at the specified index
    }

    // Converts the queue to an array for easier access
    toArray() {
        const array = [];
        let current = this.frontNode;
        while (current) {
            array.push(current.value); // Add each node's value to the array
            current = current.next;   // Move to the next node
        }
        return array; // Return the array representation of the queue
    }
}

module.exports = LinkedListQueue;
