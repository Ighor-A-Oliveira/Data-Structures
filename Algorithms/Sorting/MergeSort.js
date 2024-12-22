//Good for stable sorting of large, distributed data
//Useful for immutable React state updates


// Main MergeSort function that sorts an array and returns a new sorted array
function mergeSort(array) {
    // Base case: a single element or empty array is already sorted
    if (array.length <= 1) {
        return array;
    }

    const midIndex = Math.floor(array.length / 2);  // Find the middle index
    const leftArray = mergeSort(array.slice(0, midIndex));    // Left half
    const rightArray = mergeSort(array.slice(midIndex));       // Right half

    // Merge sorted halves
    return merge(leftArray, rightArray);
}

// Function to merge two sorted subarrays
function merge(leftArray, rightArray) {
    let merged = [];       // New array to store the merged result
    let leftIndex = 0;      // Pointer for the left array
    let rightIndex = 0;     // Pointer for the right array

    // Compare elements and merge while maintaining sorted order
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            merged.push(leftArray[leftIndex]);  // Take from left array
            leftIndex++;
        } else {
            merged.push(rightArray[rightIndex]); // Take from right array
            rightIndex++;
        }
    }

    // Collect remaining elements from the left array (if any)
    while (leftIndex < leftArray.length) {
        merged.push(leftArray[leftIndex]);
        leftIndex++;
    }

    // Collect remaining elements from the right array (if any)
    while (rightIndex < rightArray.length) {
        merged.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return merged;  // Return the merged sorted array
}



// Example usage:
const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1];
const sortedNumbers = mergeSort(numbers);

console.log('Original Array:', numbers);   // Original array remains unchanged
console.log('Sorted Array:', sortedNumbers); // New sorted array
