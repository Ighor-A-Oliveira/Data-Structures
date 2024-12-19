//Use case: Fast prefix searching, auto-completion, dictionary, search
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert word into the trie
    insert(word) {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }

        currentNode.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word) {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }

        return currentNode.isEndOfWord;
    }

    // Check if a word starts with a given prefix
    startsWith(prefix) {
        let currentNode = this.root;

        for (const char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }

        return true;
    }

    // Check if the trie is empty
    isEmpty(node = this.root) {
        if (!node) return true; // If node is null, it's empty
        if (node.isEndOfWord || Object.keys(node.children).length > 0) return false; // If it has children or is an end of word, not empty
        return true; // Otherwise, node is empty
    }

    // Clear the trie
    clear() {
        this.root = new TrieNode(); // Reset the root to an empty TrieNode
    }
}

module.exports = Trie;

