//Use case: Hierarchical data with multiple children, storing tree-like structures
class NaryTreeNode {
    constructor(value) {
        this.value = value;      // The value of the node
        this.children = [];      // Array to store child nodes
    }

    // Add a child to the current node
    addChild(child) {
        this.children.push(child);
    }
}

class NaryTree {
    constructor() {
        this.root = null;   // The root node of the tree
    }

    // Set the root of the tree
    setRoot(value) {
        this.root = new NaryTreeNode(value);  // Initialize root node
    }

    // Add a node with the given value under a parent node
    addNode(value, parentValue = null, node = this.root) {
        if (!node) return false; // If no current node, return false

        // If the current node matches the parent value, add the new child
        if (node.value === parentValue) {
            node.addChild(new NaryTreeNode(value)); // Add new child node
            return true;
        }

        // Recursively search in child nodes
        for (let child of node.children) {
            if (this.addNode(value, parentValue, child)) {
                return true; // Found parent and added node
            }
        }

        return false; // Parent node not found in this branch
    }

    // Traverse the tree in pre-order (root -> children)
    traversePreOrder(node = this.root, callback = console.log) {
        if (!node) return;

        callback(node.value); // Process current node
        for (let child of node.children) {
            this.traversePreOrder(child, callback); // Traverse children
        }
    }

    // Traverse the tree in post-order (children -> root)
    traversePostOrder(node = this.root, callback = console.log) {
        if (!node) return;

        for (let child of node.children) {
            this.traversePostOrder(child, callback); // Traverse children first
        }
        callback(node.value); // Process current node
    }

    // Traverse the tree in level-order (breadth-first)
    traverseLevelOrder(node = this.root, callback = console.log) {
        if (!node) return;

        let queue = [node]; // Initialize queue with the root node

        while (queue.length > 0) {
            let current = queue.shift(); // Dequeue a node
            callback(current.value);    // Process current node
            queue.push(...current.children); // Enqueue children
        }
    }
}

module.exports = NaryTree;

