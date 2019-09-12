
const createGraph = require('../graphGenerator')

/**
 * 找到与源节点相邻的边，然后从这些边中找到一条最小的边，把与该边相邻的
 * @param {*} head 
 */
function dijkstra1(head) {
    const distanceMap = new Map()   // 存储节点的距离
    distanceMap.set(head, 0)
    const paths = []
    const selectNodes = new Set()   // 已经组成最小值的节点

    let minNode = getMinDistanceAndUnselectedNode(distanceMap, selectNodes)

    console.log('===>', minNode)
    while (minNode) {
        const distance = distanceMap.get(minNode)
        for (let edge of minNode.edges) {
            const toNode = edge.to

            if (!distanceMap.has(toNode)) {
                distanceMap.set(toNode, distance + edge.weight)
            }
            // 如果存在，看下是否需要更新最小值路径
            distanceMap.set(toNode, Math.min(distanceMap.get(toNode), distance + edge.weight))
        }
        selectNodes.add(minNode)
        minNode = getMinDistanceAndUnselectedNode(distanceMap, selectNodes)
    }
    return distanceMap
}

function getMinDistanceAndUnselectedNode(distanceMap, touchedNodes) {
    let minNode = null
    let minDistance = Number.MAX_SAFE_INTEGER

    for (let [node, distance] of distanceMap) {
        if (!touchedNodes.has(node) && distance < minDistance) {
            minNode = node
            minDistance = distance
        }
    }
    return minNode
}

const matrix = [
    [4, 'yuan', 'A'],
    [8, 'yuan', 'B'],
    [2, 'yuan', 'C'],
    [2, 'A', 'B'],
    [1, 'C', 'B'],
    [6, 'A', 'D'],
    [7, 'B', 'E'],
    [9, 'C', 'F'],
]

const graph = createGraph(matrix)

const node = graph.nodes.get('yuan')

const result = dijkstra1(node)

for(let [key, value] of result) {
    console.log(key['value'] + ':' + value)
}