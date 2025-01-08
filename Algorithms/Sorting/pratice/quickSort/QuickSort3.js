function QuickSort(array, start, end){
    let newArray = Array.from(array)

    QuickSortHelper(newArray, start, end-1);

    return newArray;
}

function QuickSortHelper(newArray, start, end){
    if(start >= end) return;

    let pivotIndex = Partition(newArray, start, end)

    QuickSortHelper(newArray, start, pivotIndex-1)
    QuickSortHelper(newArray, pivotIndex+1, end)
}

function Partition(newArray, start, end){
    pivot = newArray[end]
    i = start - 1;
    j = start;

    for(;j<end;j++){
        if(newArray[j]<pivot){
            i++
            [newArray[i],newArray[j]] = [newArray[j],newArray[i]]
        }
    }

    i++
    [newArray[i],newArray[end]] = [newArray[end],newArray[i]]
    return i;
}

// Example Usage
const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1];
const sortedNumbers = QuickSort(numbers, 0, numbers.length);

console.log("Original array:", numbers); // Original remains unchanged
console.log("Sorted array:", sortedNumbers); // Sorted array is returned