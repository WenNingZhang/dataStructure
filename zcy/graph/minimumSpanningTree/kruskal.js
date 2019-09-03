
const UnionFind = require('./disjoint')
const MinHeap = require('./minHeap')

const createGraph = require('../graphGenerator')


function kruskal(graph) {
    const result = []
    const unionFind = new UnionFind()
    unionFind.makeSet([...graph.nodes.values()])
    const minHeap = new MinHeap()
    for (let edge of graph.edges) {
        minHeap.push(edge)
    }
    while (!minHeap.empty()) {
        const edge = minHeap.pop()
        if (!unionFind.isSameSet(edge.from, edge.to)) {
            result.push(edge)
            unionFind.union(edge.from, edge.to)
        }
    }
    return result
}



const matrix = [
    [7, 'a', 'b'],
    [2, 'a', 'c'],
    [3, 'a', 'd'],
    [4, 'a', 'e'],
    [5, 'b', 'f'],
    [6, 'b', 'g'],
    [1, 'd', 'h'],
    [20, 'c', 'g'],
    [30, 'e', 'h']
]

const graph = createGraph(matrix)


console.log('===>', kruskal(graph))