class HashTable {
    constructor(initialLimit = 4) {
      this.storage = [];
      this.storageLimit = initialLimit;
      this.size = 0;
    }
  
    // Hash function to calculate the index
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.storageLimit;
    }
  
    // Add or update a key-value pair
    add(key, value) {
      const index = this._hash(key);
      if (!this.storage[index]) {
        this.storage[index] = [];
      }
  
      // Check if key already exists, update if found
      let updated = false;
      for (let pair of this.storage[index]) {
        if (pair[0] === key) {
          pair[1] = value;
          updated = true;
          break;
        }
      }
  
      // If key does not exist, add it
      if (!updated) {
        this.storage[index].push([key, value]);
        this.size++;
  
        // Check if resizing is needed
        if (this.size / this.storageLimit > 0.75) {
          this._resize(this.storageLimit * 2);
        }
      }
    }
  
    // Remove a key-value pair
    remove(key) {
      const index = this._hash(key);
      const bucket = this.storage[index];
      if (!bucket) return false;
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
  
      return false;
    }
  
    // Lookup a value by key
    lookup(key) {
      const index = this._hash(key);
      const bucket = this.storage[index];
      if (!bucket) return undefined;
  
      for (let [storedKey, storedValue] of bucket) {
        if (storedKey === key) return storedValue;
      }
  
      return undefined;
    }
  
    // Get all keys
    keys() {
      const keys = [];
      for (const bucket of this.storage) {
        if (bucket) {
          for (const [key] of bucket) {
            keys.push(key);
          }
        }
      }
      return keys;
    }
  
    // Get all values
    values() {
      const values = [];
      for (const bucket of this.storage) {
        if (bucket) {
          for (const [, value] of bucket) {
            values.push(value);
          }
        }
      }
      return values;
    }
  
    // Get all entries as [key, value] pairs
    entries() {
      const entries = [];
      for (const bucket of this.storage) {
        if (bucket) {
          for (const pair of bucket) {
            entries.push(pair);
          }
        }
      }
      return entries;
    }
  
    // Resize the hash table when the load factor exceeds the threshold
    _resize(newLimit) {
      const oldStorage = this.storage;
      this.storageLimit = newLimit;
      this.storage = [];
      this.size = 0;
  
      for (const bucket of oldStorage) {
        if (bucket) {
          for (const [key, value] of bucket) {
            this.add(key, value);
          }
        }
      }
    }
  
    // Print the hash table
    print() {
      console.log(this.storage);
    }
  }


  module.exports = HashTable;
  
  // Example Usage
  const ht = new HashTable();
  ht.add("key1", "value1");
  ht.add("key2", "value2");
  ht.add("key3", "value3");
  ht.print();
  console.log("Lookup key1:", ht.lookup("key1"));
  ht.remove("key2");
  ht.print();
  console.log("Keys:", ht.keys());
  console.log("Values:", ht.values());
  console.log("Entries:", ht.entries());
  