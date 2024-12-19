//Use Case:	Best for large sets, lookup-heavy, no ordering
class HashSet {
    constructor() {
        this.collection = {};
    }

    // Check if an element exists in the set
    has(element) {
        return this.collection[element] !== undefined;
    }

    // Get all elements in the set
    values() {
        return Object.keys(this.collection);
    }

    // Add an element to the set
    add(element) {
        if (!this.has(element)) {
            this.collection[element] = true;
            return true;
        }
        return false;
    }

    // Remove an element from the set
    remove(element) {
        if (this.has(element)) {
            delete this.collection[element];
            return true;
        }
        return false;
    }

    // Get the size of the set
    size() {
        return Object.keys(this.collection).length;
    }

    // Union of two sets
    union(otherSet) {
        const unionSet = new HashSet();
        this.values().forEach(element => unionSet.add(element));
        otherSet.values().forEach(element => unionSet.add(element));
        return unionSet;
    }

    // Intersection of two sets
    intersection(otherSet) {
        const intersectionSet = new HashSet();
        this.values().forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }

    // Difference between two sets
    difference(otherSet) {
        const differenceSet = new HashSet();
        this.values().forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }

    // Check if the current set is a subset of another set
    subset(otherSet) {
        return this.values().every(element => otherSet.has(element));
    }
}

module.exports = HashSet;