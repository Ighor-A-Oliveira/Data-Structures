//Use case: Adequate for small to medium queues but inefficient for large ones
class PriorityArrayQueue {
    constructor() {
        // The collection holds the priority queue elements
        this._collection = [];
    }

    // Helper function to print the current state of the collection
    printCollection() {
        console.log(this._collection);
    }

    // Enqueue with priority using binary search
    enqueue(element) {
        const priority = element[1];
        let left = 0;
        let right = this._collection.length;

        // Binary search to find the correct position
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this._collection[mid][1] < priority) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        this._collection.splice(left, 0, element); // Insert at the correct index
    }

    // Dequeue and return the item at the front of the queue
    dequeue() {
        const value = this._collection.shift(); // Removes and returns the front element
        return value ? value[0] : null;
    }

    // Get the item at the front of the queue without removing it
    front() {
        return this._collection[0] ? this._collection[0][0] : null;
    }

    // Returns the size of the queue
    size() {
        return this._collection.length;
    }

    // Check if the queue is empty
    isEmpty() {
        return this._collection.length === 0;
    }

    // Peek: Return the highest-priority element without removing it
    peek() {
        return this._collection[0] ? this._collection[0][0] : null;
    }

    // Clear: Remove all elements from the queue
    clear() {
        this._collection = [];
    }

    // Contains: Check if an element exists
    contains(element) {
        return this._collection.some(([value, priority]) => value === element);
    }

    // Change Priority: Update the priority of an existing element
    changePriority(element, newPriority) {
        const index = this._collection.findIndex(([value, priority]) => value === element);
        if (index !== -1) {
            this._collection.splice(index, 1); // Remove the existing element
            this.enqueue([element, newPriority]); // Re-enqueue with new priority
        }
    }
}

module.exports = PriorityArrayQueue;
