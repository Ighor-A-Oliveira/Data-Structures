//Rarely used in practice due to inefficiency but helps grasp sorting concepts
//Educational and simple to understand  


function selectionSort(array){
    var newArray = Array.from(array);
    for(var i = 0; i < newArray.length - 1; i++){
        var min = i;
        for(var j = i + 1; j < newArray.length; j++){
            if(newArray[min] > newArray[j]){
                min = j
            }
        }
        [newArray[i], newArray[min]] = [newArray[min], newArray[i]]
    }

    return newArray;
}



const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1];
var sortedNumbers = selectionSort(numbers)

console.log('Original Array:', numbers);   // Original array remains unchanged
console.log('Sorted Array:', sortedNumbers); // New sorted array