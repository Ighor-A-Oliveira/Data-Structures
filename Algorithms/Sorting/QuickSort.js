//Efficient for large datasets, with an average time complexity of O(n log n).
//Often used in scenarios where performance matters
//Recursively divides and conquers the array


function quickSort(array, startIndex, endIndex) {
    // Create a copy of the array to avoid modifying the original
    const newArray = Array.from(array);

    // Perform the actual sorting
    quickSortHelper(newArray, startIndex, endIndex);

    return newArray; // Return the sorted array
}

function quickSortHelper(array, startIndex, endIndex) {
    // Base case: If the segment has one or no elements, it's already sorted
    if (startIndex >= endIndex) return;

    // Partition the array and get the pivot index
    const pivotIndex = partition(array, startIndex, endIndex);

    // Recursively apply quickSort to the left and right segments
    quickSortHelper(array, startIndex, pivotIndex - 1);
    quickSortHelper(array, pivotIndex + 1, endIndex);
}

function partition(array, startIndex, endIndex) {
    // Choose the last element as the pivot
    const pivot = array[endIndex];
    let i = startIndex - 1;

    // Rearrange elements based on pivot
    for (let j = startIndex; j < endIndex; j++) {
        if (array[j] < pivot) {
            i++;
            // Swap elements
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // Place the pivot element in the correct position
    i++;
    [array[i], array[endIndex]] = [array[endIndex], array[i]];

    return i; // Return the pivot index
}

// Example Usage
const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1];
const sortedNumbers = quickSort(numbers, 0, numbers.length - 1);

console.log("Original array:", numbers); // Original remains unchanged
console.log("Sorted array:", sortedNumbers); // Sorted array is returned
