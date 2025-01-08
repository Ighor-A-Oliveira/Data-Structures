//descending order
function bubbleSort(array){

    // Handle edge cases
    if (array.length <= 1) return Array.from(array);

    var newArray = Array.from(array);
    var arrLength = newArray.length;
    var isSorted;

    for(let currPass = 0; currPass < arrLength; currPass++){
        isSorted = true;
        for(let currIndex = 0; currIndex < arrLength - currPass - 1; currIndex++){
            //just changed this line
                //the logic is the same but reversed, the smallest number goes to the end
            if(newArray[currIndex] < newArray[currIndex+1]){
                [newArray[currIndex], newArray[currIndex+1]] = [newArray[currIndex+1], newArray[currIndex]];
                isSorted = false;
            }
        }

        if(isSorted){
            break;
        }
    }
    return newArray;
}





const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1];
const sortedNumbers = bubbleSort(numbers)

console.log("Unsorted Array:"+ numbers); // Original array (mutated)
console.log("Sorted Array:"+ sortedNumbers);   