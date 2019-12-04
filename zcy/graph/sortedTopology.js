/**
 * 拓扑排序应用的是有向无环图
 * inMap 是收集所有节点的入度
 * zeoInQueue 是入度为 0 的节点
 */
const createGraph = require('./graphGenerator')
function sortedTopology(graph) {
    const inMap = new Map()
    const zeroInQueue = []  // 入度为 0 的节点存放的位置

    for (let node of graph.nodes.values()) {
        inMap.set(node, node.indegree)  // 每个节点的入度记录下
        if (node.indegree === 0) {      // 如果该节点的入度是0，保存到 zeroInQueue
            zeroInQueue.push(node)
        }
    }
    const result = []
    while (zeroInQueue.length !== 0) {
        const cur = zeroInQueue.shift()
        result.push(cur.value)
        for (let next of cur.nexts) {
            inMap.set(next, next.indegree - 1)
            if (inMap.get(next) === 0) {
                zeroInQueue.push(next)
            }
        }
    }
    return result;
}

const matrix = [
    [1, 'a', 'b'],
    [2, 'a', 'c'],
    [3, 'a', 'd'],
    [4, 'a', 'e'],
    [5, 'b', 'f'],
    [6, 'b', 'g'],
    [7, 'd', 'h'],
]

const graph = createGraph(matrix)

console.log('拓扑排序 sortedTopology ===>', sortedTopology(graph))
