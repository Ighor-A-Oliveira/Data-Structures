//Use case: Disk-based storage, efficient read/write
class BTreeNode {
    constructor(t, leaf = false) {
        this.t = t; // Minimum degree
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    constructor(t) {
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    // Inserts a new key in the B-tree
    insert(key, node = this.root) {
        if (node.keys.length === 2 * this.t - 1) {
            const newRoot = new BTreeNode(this.t, false);
            newRoot.children.push(this.root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
        }
        this._insertNonFull(this.root, key);
    }

    _insertNonFull(node, key) {
        let i = node.keys.length - 1;

        if (node.leaf) {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            node.keys.splice(i + 1, 0, key);
            node.children.splice(i + 2, 0, null); // Insert new child placeholder
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;

            if (node.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this._insertNonFull(node.children[i], key);
        }
    }

    splitChild(parent, i) {
        const t = this.t;
        const y = parent.children[i];
        const z = new BTreeNode(t, y.leaf);

        parent.children.splice(i + 1, 0, z);
        parent.keys.splice(i, 0, y.keys[t - 1]);

        z.keys = y.keys.splice(t, t - 1);
        if (!y.leaf) {
            z.children = y.children.splice(t, t);
        }
    }

    search(key, node = this.root) {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return true; // Key found
        }

        if (node.leaf) {
            return false; // Key not found
        }

        return this.search(key, node.children[i]);
    }

    findMax(node = this.root) {
        while (!node.leaf) {
            node = node.children[node.children.length - 1];
        }
        return node.keys[node.keys.length - 1];
    }

    findMin(node = this.root) {
        while (!node.leaf) {
            node = node.children[0];
        }
        return node.keys[0];
    }

    isPresent(key) {
        return this.search(key);
    }

    remove(key, node = this.root) {
        let i = 0;

        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            if (node.leaf) {
                node.keys.splice(i, 1);
            } else {
                const pred = this.findMax(node.children[i]);
                node.keys[i] = pred;
                this.remove(pred, node.children[i]);
            }
        } else {
            if (node.leaf) {
                return; // Key not found, do nothing
            }

            const child = node.children[i];
            if (child.keys.length < this.t) {
                this.fill(node, i);
            }
            this.remove(key, node.children[i]);
        }
    }

    fill(node, i) {
        const t = this.t;
        if (i !== 0 && node.children[i - 1].keys.length >= t) {
            this.borrowFromPrev(node, i);
        } else if (i !== node.keys.length && node.children[i + 1].keys.length >= t) {
            this.borrowFromNext(node, i);
        } else {
            if (i !== node.keys.length) {
                this.merge(node, i);
            } else {
                this.merge(node, i - 1);
            }
        }
    }

    borrowFromPrev(node, i) {
        const t = this.t;
        const child = node.children[i];
        const sibling = node.children[i - 1];

        child.keys.unshift(node.keys[i - 1]);
        if (!child.leaf) {
            child.children.unshift(sibling.children[sibling.children.length - 1]);
        }
        node.keys[i - 1] = sibling.keys[sibling.keys.length - 1];
        sibling.keys.pop();
    }

    borrowFromNext(node, i) {
        const t = this.t;
        const child = node.children[i];
        const sibling = node.children[i + 1];

        child.keys.push(node.keys[i]);
        if (!child.leaf) {
            child.children.push(sibling.children[0]);
        }
        node.keys[i] = sibling.keys.shift();
    }

    merge(node, i) {
        const t = this.t;
        const child = node.children[i];
        const sibling = node.children[i + 1];

        child.keys.push(node.keys[i]);
        child.keys.push(...sibling.keys);

        if (!child.leaf) {
            child.children.push(...sibling.children);
        }

        node.keys.splice(i, 1);
        node.children.splice(i + 1, 1);
    }

    traverse(node = this.root, result = []) {
        let i = 0;
        while (i < node.keys.length) {
            if (!node.leaf) {
                this.traverse(node.children[i], result);
            }
            result.push(node.keys[i]);
            i++;
        }
        if (!node.leaf) {
            this.traverse(node.children[i], result);
        }
        return result;
    }

    size(node = this.root) {
        let count = node.keys.length;
        if (!node.leaf) {
            for (let child of node.children) {
                count += this.size(child);
            }
        }
        return count;
    }

    clear(node = this.root) {
        node.keys = [];
        node.children = [];
    }

    findPredecessor(key, node = this.root) {
        let current = node;
        while (!current.leaf) {
            current = current.children[current.children.length - 1];
        }
        return current.keys[current.keys.length - 1];
    }

    findSuccessor(key, node = this.root) {
        let current = node;
        while (!current.leaf) {
            current = current.children[0];
        }
        return current.keys[0];
    }

    height(node = this.root) {
        if (node.leaf) {
            return 1;
        } else {
            return 1 + Math.max(...node.children.map(child => this.height(child)));
        }
    }

    rangeSearch(start, end, node = this.root, result = []) {
        let i = 0;
        while (i < node.keys.length && start > node.keys[i]) {
            i++;
        }

        while (i < node.keys.length && node.keys[i] <= end) {
            if (!node.leaf) {
                this.rangeSearch(start, end, node.children[i], result);
            }
            if (node.keys[i] >= start && node.keys[i] <= end) {
                result.push(node.keys[i]);
            }
            i++;
        }

        if (!node.leaf) {
            this.rangeSearch(start, end, node.children[i], result);
        }

        return result;
    }
}

module.exports = BTree;
