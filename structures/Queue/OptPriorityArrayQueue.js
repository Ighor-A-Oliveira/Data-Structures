//Perf: Superior performance for large-scale priority queues
//Use case: Task prioritization, network packet processing.
class PriorityArrayQueue {
    constructor() {
        this._heap = []; // Using a heap array to store elements
    }

    // Helper function to print the current heap state
    printHeap() {
        console.log(this._heap); // Display the heap contents
    }

    // Enqueue method to add elements based on priority
    enqueue(element) {
        this._heap.push(element); // Add element to the end of the heap
        this._heapifyUp();        // Restore heap property after insertion
    }

    // Dequeue method to remove the element with the highest priority (min-heap)
    dequeue() {
        if (this.isEmpty()) return null; // Return null if the heap is empty
        const minValue = this._heap.shift(); // Remove and return the root (min element)
        this._heapifyDown();                 // Restore heap property after removal
        return minValue[0];                 // Return the value part of the min element
    }

    // Peek at the element with the highest priority (root of the heap)
    peek() {
        return this._heap[0] ? this._heap[0][0] : null; // Return the value of the root or null
    }

    // Returns the number of elements in the queue
    size() {
        return this._heap.length;
    }

    // Check if the queue is empty
    isEmpty() {
        return this._heap.length === 0;
    }

    // Clear the queue
    clear() {
        this._heap = [];
    }

    // Check if the queue contains a specific element
    contains(element) {
        return this._heap.some(([value]) => value === element); // Check for element existence
    }

    // Peek at a specific index
    peek(index) {
        if (index < 0 || index >= this._heap.length) {
            throw new Error('Index out of bounds'); // Throw error if index is invalid
        }
        return this._heap[index][0]; // Return the value part of the element
    }

    // Helper function to restore the heap property upwards after insertion
    _heapifyUp() {
        let index = this._heap.length - 1; // Start from the last element
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); // Find parent index
            if (this._heap[index][1] < this._heap[parentIndex][1]) {
                // Compare priorities
                [this._heap[index], this._heap[parentIndex]] = [this._heap[parentIndex], this._heap[index]];
                index = parentIndex; // Move up
            } else {
                break;
            }
        }
    }

    // Helper function to restore the heap property downwards after removal
    _heapifyDown() {
        let index = 0; // Start from the root
        const length = this._heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;  // Left child index
            let rightChildIndex = 2 * index + 2; // Right child index
            let smallest = index; // Assume current index is smallest

            if (leftChildIndex < length && this._heap[leftChildIndex][1] < this._heap[smallest][1]) {
                smallest = leftChildIndex; // Update smallest if left child is smaller
            }
            if (rightChildIndex < length && this._heap[rightChildIndex][1] < this._heap[smallest][1]) {
                smallest = rightChildIndex; // Update smallest if right child is smaller
            }
            if (smallest !== index) {
                [this._heap[index], this._heap[smallest]] = [this._heap[smallest], this._heap[index]];
                index = smallest; // Move down to the smallest child
            } else {
                break;
            }
        }
    }
}


module.exports = PriorityArrayQueue;
