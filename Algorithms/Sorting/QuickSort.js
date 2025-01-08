//Efficient for large datasets, with an average time complexity of O(n log n).
//Often used in scenarios where performance matters
//Recursively divides and conquers the array


function quickSort(array, startIndex, endIndex) {
    // Create a copy of the array to avoid modifying the original
    const newArray = Array.from(array);

    // Perform the actual sorting
    quickSortHelper(newArray, startIndex, endIndex);

    return newArray; // Return the sorted array
}

function quickSortHelper(array, startIndex, endIndex) {
    // Base case: If the segment has one or no elements, it's already sorted
    if (startIndex >= endIndex) return;

    // Partitions the array and get the pivot index
    //nesse caso retorna 3s
    const pivotIndex = partition(array, startIndex, endIndex);

    // Recursively apply quickSort to the left and right segments
    quickSortHelper(array, startIndex, pivotIndex - 1);
    quickSortHelper(array, pivotIndex + 1, endIndex);
}

function partition(array, startIndex, endIndex) {
    // Choose the last element as the pivot
    const pivot = array[endIndex];
    //esse elemento é um ponto de referencia
    //se o numero atual for menor que o pivot o i vai ser uma referencia de para qual casa o numero atual tem que ir para q o array fique mais ordenado
    //usamos ele para fazer as trocas quando numero atual (array[j]) é menor que o pivot mas ele também é usado para ajusta a posição do pivot
    let i = startIndex - 1;

    // Rearrange elements based on pivot
    for (let j = startIndex; j < endIndex; j++) {
        //se for menos que o pivot vc vai para a a metade menor do array
        if (array[j] < pivot) {
            i++;
            // Swap elements
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // Place the pivot element in the correct position
    i++;
    
    console.log(array);

    //quando saimos do loop a gente incrementa mais um no i, então o pivot organiza a parte menor do array e se coloca entre a parte menor e a maior
    [array[i], array[endIndex]] = [array[endIndex], array[i]];
    
    console.log(array)

    return i; // Return the pivot index
}


// primeiro pegamos o numero final para ser o pivo
//I é a variavel auxiliar que vai ser incrementado se o numero atual for menor que o pivo, por regra J sempre ficara pelo menos um numero menor que J (i = j-1)
    //com isso a gente vai ter a colocação correta do pivo quando J percorrer todo o array
//J é a variavel auxiliar que vai percorrer o array, sera o numero atual que iremos usar como comparação
    //Se o array[J] for menor que o pivo a gente incrementa +1 no I e fazemos o swap, [array[i], array[j]] = [array[j], array[i]];
//Ao final da primeira passada temos o array parcialmente organizado em relação ao pivo, só que ele ainda está no final do array
    //Incrementamos I++ fazer o swap entre o o index de array[I] e o pivo
    //Dessa forma o pivo fica bem no meio do array, dividindo ele na parte maior e parte menor
//Dps disso retornamos o indice atual do pivo, pois agora temos que arrumar o array menor e o maior, somente o pivo está no lugar certo
    //Chamamos recursivamente o metodo que organiza a metade menor quickSortHelper(array, startIndex, pivotIndex - 1);
        //pivotIndex - 1 pois o pivo já está no lugar correto, o array está sendo reoganizado em tempo real
        //Aqui fazemos o mesmo processo, percorremos o array usando as variaveis I e J, se array[J] for menor que o pivo desse subarray então incrementamos +1 em i fazemos o sway
        //Ao percorrer todo o array nós vamos criar dois sub arrays, como o array é pequeno é provavel que em algum momento vamos ter um subarray com 1 apenas
    //Chamamos recursivamente o metodo que organiza a metade maior quickSortHelper(array, startIndex, pivotIndex + 1);
        //pivotIndex + 1 pois o pivo já está no lugar correto, o array está sendo reoganizado em tempo real
        //Aqui fazemos o mesmo processo, percorremos o array usando as variaveis I e J, se array[J] for menor que o pivo desse subarray então incrementamos +1 em i fazemos o sway
        //Ao percorrer todo o array nós vamos criar dois sub arrays, como o array é pequeno é provavel que em algum momento vamos ter um subarray com 1 apenas
//A cada vez que chamamos a função quickSortHelper nós checamos se o array já está organizado, se não estiver chamamos o metodo partition
    //partition vai organizar o array em relação ao array e repassar o pivo 
    //com isso vamos cada vez mais subdividindo os arrays e organizando



// Example Usage
const numbers = [8, 2, 5, 3, 9, 4, 7, 6, 1];
const sortedNumbers = quickSort(numbers, 0, numbers.length - 1);

console.log("Original array:", numbers); // Original remains unchanged
console.log("Sorted array:", sortedNumbers); // Sorted array is returned
