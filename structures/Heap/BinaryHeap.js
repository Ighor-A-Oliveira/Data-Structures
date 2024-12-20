//Use case: Suitable when both Max-Heap and Min-Heap operations are required
class BinaryHeap {
    constructor(comparator = (a, b) => a - b) {
      this.heap = [];
      this.comparator = comparator; // Custom comparator function
    }
  
    // Insert a value into the heap
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    // Helper function to maintain the heap property while inserting
    bubbleUp() {
      let index = this.heap.length - 1;
      const element = this.heap[index];
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.heap[parentIndex];
  
        if (this.comparator(element, parent) >= 0) break;
  
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      }
    }
  
    // Extract the root element
    extract() {
      const root = this.heap[0];
      const end = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.bubbleDown();
      }
  
      return root;
    }
  
    // Helper function to maintain the heap property after extraction
    bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[index];
  
      while (true) {
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let leftChild, rightChild;
        let swapIdx = null;
  
        if (leftChildIdx < length) {
          leftChild = this.heap[leftChildIdx];
          if (this.comparator(leftChild, element) < 0) {
            swapIdx = leftChildIdx;
          }
        }
  
        if (rightChildIdx < length) {
          rightChild = this.heap[rightChildIdx];
          if (
            (swapIdx === null && this.comparator(rightChild, element) < 0) ||
            (swapIdx !== null && this.comparator(rightChild, leftChild) < 0)
          ) {
            swapIdx = rightChildIdx;
          }
        }
  
        if (swapIdx === null) break;
  
        this.heap[index] = this.heap[swapIdx];
        this.heap[swapIdx] = element;
        index = swapIdx;
      }
    }
  
    // Peek at the root element
    peek() {
      return this.heap[0];
    }
  }
  
  module.exports = BinaryHeap