//Use case: Real-time Search and Data Retrieval, Databases and APIs, Priority Queues and Scheduling Systems, Sorting Algorithms and Data Analysis,
//Cache Management, State Management in React/Next.js, Pagination and Sorting in Lists  
class AVLTreeNode {
    constructor(value) {
        // Constructor for a tree node
        this.value = value;      // The value of the node
        this.left = null;        // Pointer to the left child
        this.right = null;       // Pointer to the right child
        this.height = 1;         // Initialize the height to 1
    }
}

class AVLTree {
    constructor() {
        // Constructor for the AVL tree
        this.root = null;       // The root node of the tree
    }

    // Get the height of a node
    getHeight(node) {
        return node ? node.height : 0;  // Return the height if the node exists, otherwise 0
    }

    // Get the balance factor of a node
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
        // Balance factor is the height difference between left and right subtrees
    }

    // Rotate right operation (single rotation)
    rotateRight(y) {
        const x = y.left;           // Left child becomes the new root
        const T2 = x.right;         // Right subtree of the new root
        
        x.right = y;                // x's right subtree points to y
        y.left = T2;                // y's left subtree points to T2

        // Update heights
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

        return x;  // New root (x) after rotation
    }

    // Rotate left operation (single rotation)
    rotateLeft(x) {
        const y = x.right;          // Right child becomes the new root
        const T2 = y.left;          // Left subtree of the new root

        y.left = x;                 // y's left subtree points to x
        x.right = T2;               // x's right subtree points to T2

        // Update heights
        x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

        return y;  // New root (y) after rotation
    }

    // Insert a value into the tree
    insert(value) {
        this.root = this._insertNode(this.root, value);  // Use a recursive helper function
    }

    // Private recursive insert function
    _insertNode(node, value) {
        if (!node) return new AVLTreeNode(value);  // If the tree is empty, create a new node

        if (value < node.value) {
            node.left = this._insertNode(node.left, value);  // Insert into the left subtree
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value); // Insert into the right subtree
        } else {
            return node;  // No duplicates allowed
        }

        // Update the height of the current node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Check balance factor to determine if rotations are needed
        const balance = this.getBalanceFactor(node);

        // Left heavy and unbalanced
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);  // Rotate right
        }

        // Right heavy and unbalanced
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);   // Rotate left
        }

        // Left-Right (LR) case
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);  // Left rotation on left child
            return this.rotateRight(node);           // Right rotation on the node
        }

        // Right-Left (RL) case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right); // Right rotation on right child
            return this.rotateLeft(node);               // Left rotation on the node
        }

        return node;  // Return the unchanged node if no rotations are required
    }

    // In-order traversal of the tree
    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);  // Visit left subtree
            result.push(node.value);                    // Visit current node
            this.inOrderTraversal(node.right, result); // Visit right subtree
        }
        return result;  // Return the traversal result
    }

    // Find the minimum value node in the tree
    findMin(node = this.root) {
        while (node.left) {
            node = node.left;  // Keep moving to the leftmost node
        }
        return node.value;    // Return the value of the leftmost node
    }

    // Find the maximum value node in the tree
    findMax(node = this.root) {
        while (node.right) {
            node = node.right;  // Keep moving to the rightmost node
        }
        return node.value;    // Return the value of the rightmost node
    }

    // Check if a value is present in the tree
    isPresent(value) {
        return !!this._findNode(this.root, value);  // Return true if found, false otherwise
    }

    // Find a node with a given value
    find(value) {
        return this._findNode(this.root, value);  // Find and return the node
    }

    // Private helper function to find a node
    _findNode(node, value) {
        if (!node) return null;  // If node is null, return null
        if (value < node.value) {
            return this._findNode(node.left, value);  // Search left subtree
        } else if (value > node.value) {
            return this._findNode(node.right, value); // Search right subtree
        } else {
            return node;  // Return the found node
        }
    }

    // Remove a node with a given value
    remove(value) {
        this.root = this._removeNode(this.root, value);  // Use a recursive helper function
    }

    // Private recursive remove function
    _removeNode(node, value) {
        if (!node) return node;  // If node is null, return null

        if (value < node.value) {
            node.left = this._removeNode(node.left, value);  // Search and remove in left subtree
        } else if (value > node.value) {
            node.right = this._removeNode(node.right, value); // Search and remove in right subtree
        } else {
            // Node to be removed found
            if (!node.left) return node.right;  // If only right child exists or no children
            if (!node.right) return node.left;   // If only left child exists

            // Node with two children: get the smallest in the right subtree
            const temp = this.findMin(node.right);
            node.value = temp;                    // Replace with the smallest value
            node.right = this._removeNode(node.right, temp);  // Remove the duplicate node
        }

        // Update the height of the current node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Check balance and rotate if necessary
        const balance = this.getBalanceFactor(node);

        // Left heavy
        if (balance > 1 && this.getBalanceFactor(node.left) >= 0) {
            return this.rotateRight(node);  // Perform right rotation
        }
        if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
            node.left = this.rotateLeft(node.left);   // Left-Right case: perform double rotation
            return this.rotateRight(node);
        }

        // Right heavy
        if (balance < -1 && this.getBalanceFactor(node.right) <= 0) {
            return this.rotateLeft(node);   // Perform left rotation
        }
        if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
            node.right = this.rotateRight(node.right); // Right-Left case: perform double rotation
            return this.rotateLeft(node);
        }

        return node;  // Return the updated node if no rotations are required
    }

    // Calculate the size of the tree (number of nodes)
    size(node = this.root) {
        if (!node) return 0;  // If node is null, return 0
        return 1 + this.size(node.left) + this.size(node.right);  // Count nodes recursively
    }

    // Get balance factor of the tree
    getBalance() {
        return this.getBalanceFactor(this.root);  // Return the balance factor of the root
    }

    // Check if the tree is balanced
    isBalanced(node = this.root) {
        if (!node) return true;  // An empty tree is balanced
        const balanceFactor = this.getBalanceFactor(node);
        return (
            balanceFactor >= -1 &&
            balanceFactor <= 1 &&
            this.isBalanced(node.left) &&
            this.isBalanced(node.right)
        );
    }

    // Calculate the depth of the tree
    depth(node = this.root) {
        if (!node) return 0;  // If node is null, depth is 0
        return 1 + Math.max(this.depth(node.left), this.depth(node.right));  // Max depth of left and right subtrees
    }

    // Clear the tree
    clear() {
        this.root = null;  // Set the root to null to clear the tree
    }

    // Count the total number of nodes in the tree
    countNodes() {
        return this.size();  // Use the size method to count nodes
    }

    // Replace an old value with a new one
    replace(oldValue, newValue) {
        this.remove(oldValue);  // Remove the old value
        this.insert(newValue);  // Insert the new value
    }

    // Check if the tree is empty
    isEmpty() {
        return this.root === null;  // Tree is empty if the root is null
    }
}

module.exports = AVLTree;
