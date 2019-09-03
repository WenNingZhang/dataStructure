
/**
 * 无向图、无环
 * p 算法是以点合并到一个大集合中的。prim 
 * 先随机找一个点，然后把这个点的所有的边加入到小根堆中去。然后在重这些边中找一条小的边操作。
 */
const MinHeap = require('./minHeap')

const createGraph = require('../graphGenerator')

function primMST(node) {
    const minHeap = new MinHeap()
    const result = []
    const set = new Set()
    if (!set.has(node)) {
        set.add(node)
        for (let edge of node.edges) {
            minHeap.push(edge)
        }
        while (!minHeap.empty()) {
            const edge = minHeap.pop()
            const toNode = edge.to
            if (!set.has(toNode)) {
                set.add(toNode)
                result.push(edge)
                for (const edge of toNode.edges) {
                    minHeap.push(edge)
                }
            }
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

const node = graph.nodes.get('a')
console.log('===>', primMST(node))
