//pratice
function bubbleSort(array){
    var newArray = Array.from(array);
    var arrLength = newArray.length;
    var currPass;
    var currIndex;
    var isSorted

    for(currPass = 0; currPass < arrLength; currPass++){
        isSorted = true;
        for(currIndex = 0; currIndex < arrLength - currPass - 1; currIndex++){
            if(newArray[currIndex] > newArray[currIndex+1]){
                [newArray[currIndex],newArray[currIndex+1]] = [newArray[currIndex+1],newArray[currIndex]]
                isSorted = false
            }
        }
        if(isSorted){
            break
        }
    }
    return newArray
}   

const numbers = [2,4,3,76,28,0,3412,31,1024,27,90,12, 3.14,2132141]
var newNumbers = bubbleSort(numbers);

console.log("numbers: "+ numbers)
console.log("sorted numbers: "+ newNumbers)