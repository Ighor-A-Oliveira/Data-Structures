//Use case: Dense graphs, computer networks
class AdjacencyMatrixGraph {
    constructor(vertices) {
      this.vertices = vertices;
      this.matrix = Array(vertices.length).fill().map(() => Array(vertices.length).fill(0));
    }
  
    addEdge(vertex1, vertex2) {
      const index1 = this.vertices.indexOf(vertex1);
      const index2 = this.vertices.indexOf(vertex2);
      if (index1 !== -1 && index2 !== -1) {
        this.matrix[index1][index2] = 1;  // undirected graph
        this.matrix[index2][index1] = 1;
      }
    }
  
    removeEdge(vertex1, vertex2) {
      const index1 = this.vertices.indexOf(vertex1);
      const index2 = this.vertices.indexOf(vertex2);
      if (index1 !== -1 && index2 !== -1) {
        this.matrix[index1][index2] = 0;
        this.matrix[index2][index1] = 0;
      }
    }
  
    print() {
      console.log(this.matrix.map(row => row.join(' ')).join('\n'));
    }
  }
  