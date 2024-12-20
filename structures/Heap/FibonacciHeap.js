//Need to research more
//Dont use
class FibonacciHeap {
    constructor() {
        this.minNode = null;
        this.nodeCount = 0;
    }

    createNode(key) {
        return {
            key,
            degree: 0,
            parent: null,
            child: null,
            mark: false,
            next: null,
            prev: null,
        };
    }

    addToRootList(node) {
        if (!this.minNode) {
            // If the heap is empty, initialize the first node.
            this.minNode = node;
            this.minNode.next = this.minNode.prev = this.minNode; // Circular reference
        } else {
            node.next = this.minNode.next;
            node.prev = this.minNode;
            this.minNode.next.prev = node;
            this.minNode.next = node;

            // Update the min node if necessary
            if (node.key < this.minNode.key) {
                this.minNode = node;
            }
        }
    }

    removeFromList(node) {
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        if (node === node.prev) return null; // If only one node in the list
        return node.next;
    }

    consolidate() {
        let A = new Array(this.maxDegree()).fill(null); // Degree array initialization
        let current = this.minNode;
        let numNodes = 0;
    
        do {
            let x = current;
            let degree = x.degree;
            while (A[degree]) {
                let y = A[degree];
                if (x.key > y.key) {
                    [x, y] = [y, x]; // Ensure x has the smaller key
                }
                this.linkTrees(x, y);
                A[degree] = null; // Reset degree as we've linked x and y
                degree += 1;
            }
            A[degree] = x;
            current = current.next;
            numNodes++;
        } while (current !== this.minNode && numNodes < this.nodeCount);
    
        if (numNodes >= this.nodeCount) {
            console.error("Consolidate loop went over the number of nodes, check structure.");
        }
    }
    

    linkTrees(node1, node2) {
        // Make node2 child of node1
        node2.prev.next = node2.next; // Remove node2 from the root list
        node2.next.prev = node2.prev;
        node1.child = node2; // Set node1 as the parent
        node2.parent = node1;
        node1.degree += 1;
        node2.mark = false; // Mark it as unvisited
    }

    maxDegree() {
        return Math.floor(Math.log2(this.nodeCount)) + 1;
    }

    insert(key) {
        const newNode = this.createNode(key);
        this.addToRootList(newNode);
        this.nodeCount += 1;
        return newNode;
    }

    extractMin() {
        const min = this.minNode;
        if (min) {
            if (min.child) {
                let child = min.child;
                do {
                    let nextChild = child.next;
                    this.addToRootList(child);
                    child.parent = null; // Detach child from min node
                    child = nextChild;
                } while (child !== min.child);
            }
            this.removeFromList(min);
            if (min === min.next) {
                this.minNode = null;
            } else {
                this.minNode = min.next;
                this.consolidate(); // Rebuild heap structure
            }
            this.nodeCount -= 1;
        }
        return min ? min.key : null;
    }

    decreaseKey(node, newKey) {
        if (newKey > node.key) {
            throw new Error('New key is greater than current key');
        }
        node.key = newKey;
        const parent = node.parent;
        if (parent && node.key < parent.key) {
            this.cut(node, parent);
            this.cascadingCut(parent);
        }
        if (node.key < this.minNode.key) {
            this.minNode = node;
        }
    }

    cut(node, parent) {
        if (parent) {
            parent.degree -= 1;
            if (parent.child === node) {
                if (node.next !== node) {
                    parent.child = node.next;
                } else {
                    parent.child = null;
                }
            }
            this.addToRootList(node); // Move node to the root list
            node.parent = null;
            node.mark = false;
        }
    }

    cascadingCut(node) {
        let parent = node.parent;
        if (parent) {
            if (!node.mark) {
                node.mark = true;
            } else {
                this.cut(node, parent);
                this.cascadingCut(parent);
            }
        }
    }

    printHeap() {
        if (!this.minNode) {
            console.log('Heap is empty.');
            return;
        }
    
        let current = this.minNode;
        let numNodes = 0;
    
        console.log('Remaining Heap:');
    
        do {
            console.log(`Node key: ${current.key}`);
            current = current.next; // Avançar para o próximo nó
            numNodes++;
        } while (current !== this.minNode && numNodes < this.nodeCount);
    
        if (numNodes >= this.nodeCount) {
            console.warn('Potential infinite loop detected in printHeap.');
        }
    }
    
}

module.exports = FibonacciHeap

// Example usage:
const heap = new FibonacciHeap();
heap.insert(10);
heap.insert(20);
heap.insert(15);
console.log("Minimum:", heap.extractMin()); // Should output 10
console.log("Remaining Heap:");
heap.printHeap();
    