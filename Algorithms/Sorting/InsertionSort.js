//Great for small or nearly sorted arrays
//Often used for live updates, like inserting an element into a sorted list
//Simpler and faster than other algorithms for these specific cases


function insertionSort(array){
    var newArray = Array.from(array); // Create a copy of the array

    for (var i = 1; i < newArray.length; i++) {
        var temp = newArray[i];
        var j = i - 1;

        while (j >= 0 && newArray[j] > temp) {
            newArray[j + 1] = newArray[j]; // Shift elements to the right
            j--;
        }
        newArray[j + 1] = temp; // Place the element in its correct position
    }
    
    return newArray; // Return the sorted array
}





const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1];
var sortedNumbers = insertionSort(numbers)

console.log('Original Array:', numbers);   // Original array remains unchanged
console.log('Sorted Array:', sortedNumbers); // New sorted array