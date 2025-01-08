function QuickSort(array, start, end){
    var newArray = Array.from(array);
    

    quickSortHelper(newArray, start, end);

    console.log("passes: "+passes)
    return newArray
}

function quickSortHelper(newArray, start, end){
    if(start >= end) return;

    let pivotIndex = partition(newArray, start, end);

    quickSortHelper(newArray, start, pivotIndex - 1)
    quickSortHelper(newArray, pivotIndex+1, end)
}

function partition(newArray, start, end){
    passes++
    pivot = newArray[end]
    i = start-1;

    for(let j = start; j < end; j++){
        if(newArray[j]< pivot){
            i++
            [newArray[i], newArray[j]] = [newArray[j],newArray[i]]
        }
    }

    i++;
    [newArray[i], newArray[end]] = [newArray[end],newArray[i]]
    return i;
}

// Example Usage
let passes = 0
const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1];
const sortedNumbers = QuickSort(numbers, 0, numbers.length - 1);

console.log("Original array:", numbers); // Original remains unchanged
console.log("Sorted array:", sortedNumbers); // Sorted array is returned