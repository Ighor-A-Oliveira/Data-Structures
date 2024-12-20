//Use case: Graphs with predefined edges
class IncidenceMatrixGraph {
    constructor(vertices, edges) {
      this.vertices = vertices;
      this.edges = edges;
      this.matrix = Array(vertices.length).fill().map(() => Array(edges.length).fill(0));
    }
  
    addEdge(vertex1, vertex2) {
      const edgeIndex = this.edges.findIndex(edge => edge.includes(vertex1) && edge.includes(vertex2));
      if (edgeIndex !== -1) {
        const vertex1Index = this.vertices.indexOf(vertex1);
        const vertex2Index = this.vertices.indexOf(vertex2);
        this.matrix[vertex1Index][edgeIndex] = 1;
        this.matrix[vertex2Index][edgeIndex] = 1;
      }
    }
  
    removeEdge(vertex1, vertex2) {
      const edgeIndex = this.edges.findIndex(edge => edge.includes(vertex1) && edge.includes(vertex2));
      if (edgeIndex !== -1) {
        const vertex1Index = this.vertices.indexOf(vertex1);
        const vertex2Index = this.vertices.indexOf(vertex2);
        this.matrix[vertex1Index][edgeIndex] = 0;
        this.matrix[vertex2Index][edgeIndex] = 0;
      }
    }
  
    print() {
      console.log(this.matrix.map(row => row.join(' ')).join('\n'));
    }
  }
  