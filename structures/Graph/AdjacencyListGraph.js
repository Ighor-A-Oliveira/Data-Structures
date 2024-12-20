//Use case: Sparse graphs, social networks
class AdjacencyListGraph {
    constructor() {
      this.vertices = [];
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
        this.vertices.push(vertex);
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjList.has(vertex1)) this.addVertex(vertex1);
      if (!this.adjList.has(vertex2)) this.addVertex(vertex2);
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1); // for undirected graph
    }
  
    removeEdge(vertex1, vertex2) {
      if (this.adjList.has(vertex1)) {
        this.adjList.set(vertex1, this.adjList.get(vertex1).filter(v => v !== vertex2));
      }
      if (this.adjList.has(vertex2)) {
        this.adjList.set(vertex2, this.adjList.get(vertex2).filter(v => v !== vertex1));
      }
    }
  
    removeVertex(vertex) {
      if (this.adjList.has(vertex)) {
        this.adjList.delete(vertex);
        this.vertices = this.vertices.filter(v => v !== vertex);
        for (const [key, value] of this.adjList) {
          this.adjList.set(key, value.filter(v => v !== vertex));
        }
      }
    }
  
    print() {
      for (let vertex of this.vertices) {
        console.log(`${vertex} -> ${this.adjList.get(vertex).join(', ')}`);
      }
    }
  }
  