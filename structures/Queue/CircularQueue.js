//Use case: Buffering, task scheduling with limited resources.
class CircularQueue {
    constructor(maxSize) {
        this._collection = new Array(maxSize);
        this._front = 0;
        this._rear = 0;
        this._size = 0;
        this._maxSize = maxSize;
    }

    enqueue(element) {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }
        this._collection[this._rear] = element;
        this._rear = (this._rear + 1) % this._maxSize;
        this._size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const dequeuedValue = this._collection[this._front];
        this._front = (this._front + 1) % this._maxSize;
        this._size--;
        return dequeuedValue;
    }

    front() {
        return this.isEmpty() ? null : this._collection[this._front];
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this._size === 0;
    }

    isFull() {
        return this._size === this._maxSize;
    }

    print() {
        const elements = [];
        for (let i = 0; i < this._size; i++) {
            elements.push(this._collection[(this._front + i) % this._maxSize]);
        }
        console.log(elements);
    }

    clear() {
        this._front = 0;
        this._rear = 0;
        this._size = 0;
    }

    contains(element) {
        for (let i = 0; i < this._size; i++) {
            if (this._collection[(this._front + i) % this._maxSize] === element) {
                return true;
            }
        }
        return false;
    }

    peek(index) {
        if (index < 0 || index >= this._size) {
            throw new Error('Index out of bounds');
        }
        return this._collection[(this._front + index) % this._maxSize];
    }

    toArray() {
        const array = [];
        for (let i = 0; i < this._size; i++) {
            array.push(this._collection[(this._front + i) % this._maxSize]);
        }
        return array;
    }
}

module.exports = CircularQueue;
