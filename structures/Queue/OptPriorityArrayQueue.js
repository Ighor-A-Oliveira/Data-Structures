//Perf: Superior performance for large-scale priority queues
//Use case: Task prioritization, network packet processing.
class PriorityArrayQueue {
    constructor() {
        this._heap = []; // Using a heap array
    }

    // Helper function to print the current heap state
    printHeap() {
        console.log(this._heap);
    }

    enqueue(element) {
        this._heap.push(element);
        this._heapifyUp(); // Restore heap property
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const minValue = this._heap.shift(); // Remove the root (minimum element)
        this._heapifyDown(); // Restore heap property
        return minValue[0]; // Return the value only
    }

    front() {
        return this._heap[0] ? this._heap[0][0] : null; // Peek at the root (min element)
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this._heap.length === 0;
    }

    clear() {
        this._heap = [];
    }

    contains(element) {
        return this._heap.some(([value]) => value === element);
    }

    peek(index) {
        if (index < 0 || index >= this._heap.length) {
            throw new Error('Index out of bounds');
        }
        return this._heap[index][0]; // return the value only
    }

    _heapifyUp() {
        let index = this._heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this._heap[index][1] < this._heap[parentIndex][1]) {
                [this._heap[index], this._heap[parentIndex]] = [this._heap[parentIndex], this._heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this._heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this._heap[leftChildIndex][1] < this._heap[smallest][1]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this._heap[rightChildIndex][1] < this._heap[smallest][1]) {
                smallest = rightChildIndex;
            }
            if (smallest !== index) {
                [this._heap[index], this._heap[smallest]] = [this._heap[smallest], this._heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

module.exports = PriorityArrayQueue;
