//Frequently used in React for sorting arrays in tables, lists, or dropdowns
//Not always stable (depends on the browser).
const names = ["Alice", "Charlie", "Bob"];
const sortedNames = names.sort(); // Lexicographical sorting
console.log(sortedNames); // Output: ["Alice", "Bob", "Charlie"]


const numbers = [10, 5, 20, 15];
const sortedNumbers = numbers.sort((a, b) => a - b); // Ascending order
console.log(sortedNumbers); // Output: [5, 10, 15, 20]
