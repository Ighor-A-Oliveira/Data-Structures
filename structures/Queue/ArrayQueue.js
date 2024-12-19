// Queue: first in, first out
// Use case: Task scheduling, API requests, background jobs.
class ArrayQueue {
    constructor() {
        // The collection holds the queue elements
        this._collection = [];
    }

    // Helper function to log the queue
    print() {
        console.log(this._collection);
    }

    // Adds an item at the last spot of the queue
    enqueue(element) {
        this._collection.push(element);
    }

    // Removes the item at the front of the queue
    dequeue() {
        if (this.isEmpty()) return undefined; // Return undefined if the queue is empty
        return this._collection.splice(0, 1)[0]; // Efficient removal
    }

    // Returns what item is at the front of the queue
    front() {
        return this._collection[0];
    }

    // Returns the size of the queue
    size() {
        return this._collection.length;
    }

    // Checks if the queue is empty
    isEmpty() {
        return (this._collection.length === 0);
    }
}

module.exports = ArrayQueue;
