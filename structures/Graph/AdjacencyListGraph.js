//Use case: Sparse graphs, social networks
class AdjacencyListGraph {
  constructor() {
      this.vertices = [];        // Array to store vertices
      this.adjList = new Map();  // Adjacency list using Map to store edges
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
          this.adjList.set(vertex, []);  // Add vertex to adjacency list with an empty array
          this.vertices.push(vertex);     // Add vertex to the vertices array
      }
  }

  // Method to add an edge between two vertices
  addEdge(vertex1, vertex2) {
      if (!this.adjList.has(vertex1)) this.addVertex(vertex1);  // Ensure vertex1 exists
      if (!this.adjList.has(vertex2)) this.addVertex(vertex2);  // Ensure vertex2 exists
      this.adjList.get(vertex1).push(vertex2);  // Add vertex2 to vertex1's adjacency list
      this.adjList.get(vertex2).push(vertex1);  // Add vertex1 to vertex2's adjacency list (undirected graph)
  }

  // Method to remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
      if (this.adjList.has(vertex1)) {
          this.adjList.set(vertex1, this.adjList.get(vertex1).filter(v => v !== vertex2));  // Remove vertex2 from vertex1's list
      }
      if (this.adjList.has(vertex2)) {
          this.adjList.set(vertex2, this.adjList.get(vertex2).filter(v => v !== vertex1));  // Remove vertex1 from vertex2's list
      }
  }

  // Method to remove a vertex and its associated edges
  removeVertex(vertex) {
      if (this.adjList.has(vertex)) {
          this.adjList.delete(vertex);                // Remove vertex from adjacency list
          this.vertices = this.vertices.filter(v => v !== vertex);  // Remove vertex from vertices list
          for (const [key, value] of this.adjList) {
              this.adjList.set(key, value.filter(v => v !== vertex));  // Remove references from other vertices
          }
      }
  }

  // Method to print the graph
  print() {
      for (let vertex of this.vertices) {
          console.log(`${vertex} -> ${this.adjList.get(vertex).join(', ')}`);  // Print each vertex and its neighbors
      }
  }
}

  
  module.exports = AdjacencyListGraph;