//Useful for small datasets or educational purposes
// Bubble sort: A simple algorithm that repeatedly steps through the list,
// compares adjacent elements, and swaps them if they are in the wrong order.

function bubbleSort(newNumbers) {
    // Does not mutate the array
    var numbersArray = Array.from(newNumbers);
    const arrayLength = numbersArray.length;
    var isSorted;

    // Outer loop: Iterate over the array multiple times
    for (let currentPass = 0; currentPass < arrayLength; currentPass++) {
        isSorted = true;
        console.log("Outer for:" + numbersArray)

        // Inner loop: Compare each adjacent pair of elements
        for (let currentIndex = 0; currentIndex < arrayLength - 1 - currentPass; currentIndex++) { 
            console.log(currentIndex+" Inner for pre if:" + numbersArray)
            // If the current element is greater than the next element, swap them
            if (numbersArray[currentIndex] > numbersArray[currentIndex + 1]) {
                // Perform the swap using destructuring assignment
                [numbersArray[currentIndex], numbersArray[currentIndex + 1]] =
                    [numbersArray[currentIndex + 1], numbersArray[currentIndex]];
                isSorted = false;
            }
            console.log("Inneer for pos if:" + numbersArray)
        }

        // If no swaps were made during this pass, the array is already sorted
        if (isSorted) {
            //console.log('early return')
            break; // Exit the outer loop early
        }
    }

    // Return the sorted array for display or further use
    return numbersArray;
}

  
  // Example usage:
  var numbers = [8,2,4,1,3]
  const sortedArray = bubbleSort(numbers);
  
  console.log("Unsorted Array:", numbers); // Original array (mutated)
  console.log("Sorted Array:", sortedArray);   
  