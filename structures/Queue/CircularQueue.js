//Use case: Buffering, task scheduling with limited resources.
class CircularQueue {
    constructor(maxSize) {
        // Initialize the queue with a fixed size
        this._collection = new Array(maxSize); // Array to hold the elements
        this._front = 0;  // Index of the front element
        this._rear = 0;   // Index of the rear element
        this._size = 0;   // Current number of elements in the queue
        this._maxSize = maxSize; // Maximum size of the queue
    }

    // Adds an element to the rear of the queue
    enqueue(element) {
        if (this.isFull()) {
            throw new Error('Queue is full'); // Throw error if the queue is full
        }
        this._collection[this._rear] = element; // Add element at the rear
        this._rear = (this._rear + 1) % this._maxSize; // Circular increment of rear
        this._size++; // Increase the size of the queue
    }

    // Removes and returns the front element from the queue
    dequeue() {
        if (this.isEmpty()) return null; // Return null if the queue is empty
        const dequeuedValue = this._collection[this._front]; // Get the front element
        this._front = (this._front + 1) % this._maxSize; // Circular increment of front
        this._size--; // Decrease the size of the queue
        return dequeuedValue; // Return the dequeued element
    }

    // Returns the front element of the queue without removing it
    front() {
        return this.isEmpty() ? null : this._collection[this._front]; // Return front element or null if empty
    }

    // Returns the current number of elements in the queue
    size() {
        return this._size;
    }

    // Checks if the queue is empty
    isEmpty() {
        return this._size === 0;
    }

    // Checks if the queue is full
    isFull() {
        return this._size === this._maxSize;
    }

    // Prints the elements of the queue
    print() {
        const elements = [];
        for (let i = 0; i < this._size; i++) {
            elements.push(this._collection[(this._front + i) % this._maxSize]);
        }
        console.log(elements); // Log the elements in the order they appear
    }

    // Clears the queue
    clear() {
        this._front = 0; // Reset front to 0
        this._rear = 0;  // Reset rear to 0
        this._size = 0;  // Reset size to 0
    }

    // Checks if the queue contains a specific element
    contains(element) {
        for (let i = 0; i < this._size; i++) {
            if (this._collection[(this._front + i) % this._maxSize] === element) {
                return true;
            }
        }
        return false;
    }

    // Returns the element at the specified index
    peek(index) {
        if (index < 0 || index >= this._size) {
            throw new Error('Index out of bounds'); // Throw error for invalid index
        }
        return this._collection[(this._front + index) % this._maxSize]; // Calculate index in circular manner
    }

    // Converts the circular queue to an array for easier access
    toArray() {
        const array = [];
        for (let i = 0; i < this._size; i++) {
            array.push(this._collection[(this._front + i) % this._maxSize]); // Gather elements in order
        }
        return array; // Return the array
    }
}


module.exports = CircularQueue;
