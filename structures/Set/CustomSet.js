//Use case: Best for small to medium-sized collections, simple and efficient lookup
class CustomSetClass {
    constructor() {
        // Use a Set to store unique elements.
        this.collection = new Set();
    }

    // Checks if an element exists in the set.
    has(element) {
        return this.collection.has(element);
    }

    // Returns all values in the set as an array.
    values() {
        return Array.from(this.collection); // Convert Set to array.
    }

    // Adds an element to the set if not already present.
    add(element) {
        if (!this.has(element)) {
            this.collection.add(element); // Use Set's add method.
            return true;
        }
        return false; // Element already exists in the set.
    }

    // Removes an item from the set if it exists.
    remove(element) {
        if (this.has(element)) {
            this.collection.delete(element); // Use Set's delete method.
            return true;
        }
        return false; // Element does not exist in the set.
    }

    // Returns the number of items in the set.
    size() {
        return this.collection.size; // Use Set's size property.
    }

    // Returns the union of two sets as a new set.
    union(otherSet) {
        const unionSet = new CustomSetClass();
        this.collection.forEach(e => unionSet.add(e));
        otherSet.values().forEach(e => unionSet.add(e));
        return unionSet;
    }

    // Returns the intersection of two sets as a new set.
    intersection(otherSet) {
        const intersectionSet = new CustomSetClass();
        this.collection.forEach(e => {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    // Returns the difference of two sets as a new set.
    difference(otherSet) {
        const differenceSet = new CustomSetClass();
        this.collection.forEach(e => {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // Tests if the set is a subset of another set.
    subset(otherSet) {
        return [...this.collection].every(value => otherSet.has(value));
    }

    // Clears the set (removes all elements).
    clear() {
        this.collection.clear();
    }

    // Clones the set and returns a new set.
    clone() {
        const clonedSet = new CustomSetClass();
        this.collection.forEach(e => clonedSet.add(e));
        return clonedSet;
    }

    // Checks if the set is empty.
    isEmpty() {
        return this.collection.size === 0;
    }
}

// Export the CustomSetClass class so it can be used in other files.
module.exports = CustomSetClass;
