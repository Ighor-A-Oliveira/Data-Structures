//Use case: Real-time systems, multi-threading, asynchronous tasks.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
        this._size = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);
        if (this.isEmpty()) {
            this.frontNode = newNode;
            this.rearNode = newNode;
        } else {
            this.rearNode.next = newNode;
            this.rearNode = newNode;
        }
        this._size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const dequeuedValue = this.frontNode.value;
        this.frontNode = this.frontNode.next;
        if (this.frontNode === null) {
            this.rearNode = null; // If queue becomes empty, set rear to null.
        }
        this._size--;
        return dequeuedValue;
    }

    front() {
        return this.frontNode ? this.frontNode.value : null;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this.frontNode === null;
    }

    print() {
        let current = this.frontNode;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements);
    }

    clear() {
        this.frontNode = null;
        this.rearNode = null;
        this._size = 0;
    }

    contains(element) {
        let current = this.frontNode;
        while (current) {
            if (current.value === element) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    peek(index) {
        if (index < 0 || index >= this._size) {
            throw new Error('Index out of bounds');
        }
        let current = this.frontNode;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }

    toArray() {
        const array = [];
        let current = this.frontNode;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}
