//Use case: Dense graphs, computer networks
class AdjacencyMatrixGraph {
  constructor(vertices) {
      this.vertices = vertices;                // Array of vertices
      this.matrix = Array(vertices.length).fill().map(() => Array(vertices.length).fill(0));  // Initialize matrix with 0s
  }

  // Method to add an edge between two vertices
  addEdge(vertex1, vertex2) {
      const index1 = this.vertices.indexOf(vertex1);  // Get index of vertex1
      const index2 = this.vertices.indexOf(vertex2);  // Get index of vertex2
      if (index1 !== -1 && index2 !== -1) {
          this.matrix[index1][index2] = 1;  // Set the value to 1 for undirected graph
          this.matrix[index2][index1] = 1;  // Symmetric for undirected graph
      }
  }

  // Method to remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
      const index1 = this.vertices.indexOf(vertex1);  // Get index of vertex1
      const index2 = this.vertices.indexOf(vertex2);  // Get index of vertex2
      if (index1 !== -1 && index2 !== -1) {
          this.matrix[index1][index2] = 0;  // Set to 0 to remove the edge
          this.matrix[index2][index1] = 0;  // Symmetric for undirected graph
      }
  }

  // Method to print the adjacency matrix
  print() {
      console.log(this.matrix.map(row => row.join(' ')).join('\n'));  // Print the matrix in a readable format
  }
}

  module.exports = AdjacencyMatrixGraph;