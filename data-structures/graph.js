// Graph (Unweighted + Undirected)
// Insertion(Vertex & Edge) O(1)
// Vertex Removal O(V + E)
// Edge Removal O(E)

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }

  removeVertex(vertex) {
    for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
      let vertexToRemove = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vertexToRemove);
    }
    delete this.adjacencyList[vertex];
  }
}
