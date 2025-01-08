function BubbleSort(array){
    let newArray = Array.from(array);
    let arrLength = newArray.length;
    let currIndex;
    let currPass;
    let isSorted

    for(currPass = 0; currPass < arrLength; currPass){
        isSorted = true;
        for(currIndex = 0; currIndex < arrLength- currPass - 1; currIndex++){
            if(newArray[currIndex]>newArray[currIndex+1]){
                isSorted = false;
                [newArray[currIndex], newArray[currIndex+1]] = [newArray[currIndex+1], newArray[currIndex]]
            }
        }
        if(isSorted){
            break;
        }
    }

    return newArray
}

const numbers = [2,4,3,76,28,0,3412,31,1024,27,90,12, 3.14,2132141]
var newNumbers = BubbleSort(numbers);

console.log("numbers: "+ numbers)
console.log("sorted numbers: "+ newNumbers)