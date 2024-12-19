    //Use case: Search and Sorting Mechanisms, Data Storage and Organization, State Management in React, 
    //Database Indexing (MongoDB/Binary Tree-Style), Rendering Large Sets of Data in React Applications,
    //Routing and Navigation in Next.js, Middleware and Workflow Management
    class BinaryTreeNode {
        constructor(value) {
            this.value = value;   // The value of the node
            this.left = null;      // Left child of the node
            this.right = null;     // Right child of the node
        }
    }
        
    class BinaryTree {
        constructor() {
            this.root = null;   // The root node of the tree
        }
        
        // Insert a node into the tree
        insert(value) {
            const newNode = new BinaryTreeNode(value); // Create a new node with the given value
            if (this.root === null) {
                this.root = newNode; // If the tree is empty, set root to the new node
            } else {
                this._insertNode(this.root, newNode); // Otherwise, insert the node at the appropriate position
            }
        }
        
        _insertNode(node, newNode) {
            if (newNode.value < node.value) {
                // Go to the left subtree if the new value is smaller than the current node's value
                if (node.left === null) {
                    node.left = newNode; // Insert as the left child
                } else {
                    this._insertNode(node.left, newNode); // Recursively insert into the left subtree
                }
            } else {
                // Go to the right subtree if the new value is larger than the current node's value
                if (node.right === null) {
                    node.right = newNode; // Insert as the right child
                } else {
                    this._insertNode(node.right, newNode); // Recursively insert into the right subtree
                }
            }
        }
        
        // In-order traversal (left-root-right)
        inOrderTraversal(node = this.root, result = []) {
            if (node !== null) {
                this.inOrderTraversal(node.left, result);   // Traverse left subtree
                result.push(node.value);                      // Visit the root
                this.inOrderTraversal(node.right, result);  // Traverse right subtree
            }
            return result; // Return the sorted result of in-order traversal
        }
        
        // Find a node
        find(value) {
            return this._findNode(this.root, value);
        }
        
        _findNode(node, value) {
            if (node === null) {
                return null; // Base case: node not found
            } else if (value < node.value) {
                return this._findNode(node.left, value);  // Search in the left subtree
            } else if (value > node.value) {
                return this._findNode(node.right, value); // Search in the right subtree
            } else {
                return node; // Node found
            }
        }
        
        // Find the minimum value node
        findMin(node = this.root) {
            while (node && node.left !== null) {
                node = node.left; // Go to the leftmost node
            }
            return node ? node.value : null; // Return the minimum value
        }
        
        // Find the maximum value node
        findMax(node = this.root) {
            while (node && node.right !== null) {
                node = node.right; // Go to the rightmost node
            }
            return node ? node.value : null; // Return the maximum value
        }
        
        // Check if a value is present in the tree
        isPresent(value) {
            return this.find(value) !== null; // Use find method to check presence
        }
        
        // Remove a node from the tree
        remove(value) {
            this.root = this._removeNode(this.root, value); // Start removal process from the root
        }
        
        _removeNode(node, value) {
            if (node === null) {
                return null; // Base case: node not found
            }
        
            if (value < node.value) {
                node.left = this._removeNode(node.left, value); // Search and remove in the left subtree
            } else if (value > node.value) {
                node.right = this._removeNode(node.right, value); // Search and remove in the right subtree
            } else {
                // Node to remove found
                
                // Node with only one child or no child
                if (node.left === null) {
                    return node.right; // Replace the node with its right child
                } else if (node.right === null) {
                    return node.left; // Replace the node with its left child
                }
        
                // Node with two children
                node.value = this.findMin(node.right); // Replace with the smallest node from the right subtree
                node.right = this._removeNode(node.right, node.value); // Delete the in-order successor
            }
        
            return node;
        }
        
        // Get the height of the tree
        getHeight(node = this.root) {
            if (node === null) {
                return 0; // Empty tree height is 0
            }
        
            const leftHeight = this.getHeight(node.left);
            const rightHeight = this.getHeight(node.right);
        
            return Math.max(leftHeight, rightHeight) + 1; // Height is max of left and right subtree + 1
        }
        
        // Get the size (number of nodes) of the tree
        getSize(node = this.root) {
            if (node === null) {
                return 0; // Empty tree size is 0
            }
            return 1 + this.getSize(node.left) + this.getSize(node.right); // 1 for current node + left + right
        }
        
        // Check if the tree is balanced
        isBalanced(node = this.root) {
            if (node === null) {
                return true; // An empty tree is balanced
            }
        
            const leftHeight = this.getHeight(node.left);
            const rightHeight = this.getHeight(node.right);
        
            const heightDifference = Math.abs(leftHeight - rightHeight);
            if (heightDifference > 1) {
                return false; // The tree is not balanced
            }
        
            return this.isBalanced(node.left) && this.isBalanced(node.right); // Check recursively
        }
        
        // Clear the tree
        clear() {
            this.root = null; // Set the root to null to clear the tree
        }
        
        // Level-order traversal (BFS)
        levelOrderTraversal() {
            if (this.root === null) {
                return [];
            }
        
            const queue = [this.root];
            const result = [];
        
            while (queue.length > 0) {
                const currentNode = queue.shift(); // Dequeue
                result.push(currentNode.value); // Add current node's value to the result
        
                if (currentNode.left) {
                    queue.push(currentNode.left); // Enqueue left child if exists
                }
                if (currentNode.right) {
                    queue.push(currentNode.right); // Enqueue right child if exists
                }
            }
        
            return result;
        }
    }
 
module.exports = BinaryTree;   
    