//Use case: Used in scenarios where largest priority needs to be processed first
class MaxHeap {
    constructor() {
      this.heap = [];
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
  
        if (element <= parent) break;
  
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      }
    }
  
    // Extract the maximum value from the heap
    extractMax() {
      const max = this.heap[0];
      const end = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.bubbleDown();
      }
  
      return max;
    }
  
    // Helper function to maintain the heap property after extracting
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
          if (leftChild > element) {
            swapIdx = leftChildIdx;
          }
        }
  
        if (rightChildIdx < length) {
          rightChild = this.heap[rightChildIdx];
          if (
            (swapIdx === null && rightChild > element) ||
            (swapIdx !== null && rightChild > leftChild)
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
  
    // Peek at the maximum element
    peek() {
      return this.heap[0];
    }
  }
  
  module.exports = MaxHeap;