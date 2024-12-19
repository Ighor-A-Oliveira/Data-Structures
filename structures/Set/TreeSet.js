class TreeSet {
    constructor() {
        this.collection = new Set(); // TreeSet-like structure, built-in Set
    }

    // Check if an element exists in the set
    has(element) {
        return this.collection.has(element);
    }

    // Get all elements in the set
    values() {
        return Array.from(this.collection);
    }

    // Add an element to the set
    add(element) {
        if (!this.has(element)) {
            this.collection.add(element);
            return true;
        }
        return false;
    }

    // Remove an element from the set
    remove(element) {
        if (this.has(element)) {
            this.collection.delete(element);
            return true;
        }
        return false;
    }

    // Get the size of the set
    size() {
        return this.collection.size;
    }

    // Union of two sets
    union(otherSet) {
        const unionSet = new TreeSet();
        this.values().forEach(element => unionSet.add(element));
        otherSet.values().forEach(element => unionSet.add(element));
        return unionSet;
    }

    // Intersection of two sets
    intersection(otherSet) {
        const intersectionSet = new TreeSet();
        this.values().forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }

    // Difference between two sets
    difference(otherSet) {
        const differenceSet = new TreeSet();
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

    // Check if two sets are disjoint (no common elements)
    isDisjoint(otherSet) {
        return this.values().every(element => !otherSet.has(element));
    }

    // Convert the set to an array
    toArray() {
        return this.values();
    }

    // Check if the set is a proper superset of another set
    isSuperset(otherSet) {
        return otherSet.values().every(element => this.has(element));
    }

    // Perform a difference and return elements in the set that are not in another set
    symmetricDifference(otherSet) {
        const differenceSet = this.difference(otherSet);
        const otherDifferenceSet = otherSet.difference(this);
        return differenceSet.union(otherDifferenceSet);
    }
}

module.exports = TreeSet;
