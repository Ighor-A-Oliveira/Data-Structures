//first loop controls how long the inner for loops
//second loop makes the swaps
    //since at the end of every swap the biggest number goes to the last possible spot we can decrease the outter loop control variable to and tackle the next biggest number

function bubbleSort(array){

     // Handle edge cases
     if (array.length <= 1) return Array.from(array);

    //copying the array so we dont mutate the original one
    let newArray = Array.from(array);
    //getting the length
    let arrLength = newArray.length
    //var that lets us exit the loop early if we go through an entire inner loop without changes
    let isSorted;

    

    //currPass controls both the outter loop and the inner loop, since the outter loop condition is arrLength - 1 - currPass
        //this way, at each pass, the biggest number available always goes to the end of the array
    for(let currPass = 0; currPass < arrLength; currPass++){
        isSorted = true; //we put his before the inner loop, since the inner loop who actually makes the swaps, if we dont make a swap it means the array is sorted
        //here we are looping through the array and making the swaps
            //currPass controls for how long we loop
        for(let currIndex = 0; currIndex < arrLength - currPass - 1; currIndex++){
            //here we check if the current index is bigger then the next number in the array
                //if it is then we just swap places, this way the biggest number always goes to the end
            if(newArray[currIndex] > newArray[currIndex+1]){
                [newArray[currIndex], newArray[currIndex+1]] = [newArray[currIndex+1] , newArray[currIndex]]
                isSorted = false;
            }
        }

        //if we go through an entire inner loop without changes them the array is sorted
        if(isSorted){
            break;
        }
    }

    return newArray
}



const numbers= [8,2,4,1,3]
const sortedNumbers = bubbleSort(numbers)

console.log("Unsorted Array:"+ numbers); // Original array (mutated)
console.log("Sorted Array:"+ sortedNumbers);   