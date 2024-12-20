//Use case: Graphs with predefined edges
class IncidenceMatrixGraph {
  constructor(vertices, edges) {
      this.vertices = vertices;               // Array of vertices
      this.edges = edges;                     // Array of edges
      this.matrix = Array(vertices.length).fill().map(() => Array(edges.length).fill(0)); // Initialize the matrix
  }

  // Method to add an edge between two vertices
  addEdge(vertex1, vertex2) {
      const edgeIndex = this.edges.findIndex(edge => edge.includes(vertex1) && edge.includes(vertex2));  // Find the edge index
      if (edgeIndex !== -1) {
          const vertex1Index = this.vertices.indexOf(vertex1);  // Get index of vertex1
          const vertex2Index = this.vertices.indexOf(vertex2);  // Get index of vertex2
          this.matrix[vertex1Index][edgeIndex] = 1;  // Mark the edge for vertex1
          this.matrix[vertex2Index][edgeIndex] = 1;  // Mark the edge for vertex2
      }
  }

  // Method to remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
      const edgeIndex = this.edges.findIndex(edge => edge.includes(vertex1) && edge.includes(vertex2));  // Find the edge index
      if (edgeIndex !== -1) {
          const vertex1Index = this.vertices.indexOf(vertex1);  // Get index of vertex1
          const vertex2Index = this.vertices.indexOf(vertex2);  // Get index of vertex2
          this.matrix[vertex1Index][edgeIndex] = 0;  // Remove the edge for vertex1
          this.matrix[vertex2Index][edgeIndex] = 0;  // Remove the edge for vertex2
      }
  }

  // Method to print the incidence matrix
  print() {
      console.log(this.matrix.map(row => row.join(' ')).join('\n'));  // Print the matrix in a readable format
  }
}

  
  module.exports = IncidenceMatrixGraph;