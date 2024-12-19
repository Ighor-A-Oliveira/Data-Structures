/* const Stack = require("./structures/Stack/Stack");
var myStack = new Stack();*/

const PriorityArrayQueue = require("./structures/Queue/PriorityArrayQueue");
var myQueue = new PriorityArrayQueue();

myQueue.enqueue(['a', 2])
myQueue.enqueue(['b', 3])
myQueue.enqueue(['c', 1])
myQueue.printCollection()
myQueue.dequeue()
console.log(myQueue.front())
myQueue.printCollection()
