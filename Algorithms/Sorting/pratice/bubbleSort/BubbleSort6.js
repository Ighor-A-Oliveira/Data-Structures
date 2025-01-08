function BubbleSort(array){
    let newArray = Array.from(array)
    let arrLength = newArray.length;
    let currPass;
    let currIndex;
    let isSorted;

    for(currPass=0; currPass < arrLength; currPass++){
        isSorted=true;
        for(currIndex=0; currIndex < arrLength-currPass-1; currIndex++){
            if(newArray[currIndex]>newArray[currIndex+1]){
                isSorted=false;
                [newArray[currIndex], newArray[currIndex+1]]=[newArray[currIndex+1], newArray[currIndex]]
            }
        }
        if(isSorted) break;
    }

    return newArray;
}


// Example Usage
const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1,0,-1,-2,-3,-4,-1000];
const sortedNumbers = BubbleSort(numbers);

console.log("Original array:", numbers); // Original remains unchanged
console.log("Sorted array:", sortedNumbers); // Sorted array is returned