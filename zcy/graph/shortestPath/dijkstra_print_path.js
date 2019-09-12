
const createGraph = require('../graphGenerator')
/**
 * 找到与源节点相邻的边，然后从这些边中找到一条最小的边，把与该边相邻的
 * @param {*} head 
 */
function dijkstra1(head) {
    const distanceMap = new Map()   // 存储节点的距离
    const parentMap = new Map()     // 记录路径的 parent 
    distanceMap.set(head, 0)
    parentMap.set(head, null)
    const paths = []
    const selectNodes = new Set()   // 已经组成最小值的节点

    let minNode = getMinDistanceAndUnselectedNode(distanceMap, selectNodes)

    while (minNode) {
        const distance = distanceMap.get(minNode)
        for (let edge of minNode.edges) {
            const toNode = edge.to

            if (!distanceMap.has(toNode)) {
                distanceMap.set(toNode, distance + edge.weight)
                parentMap.set(toNode, minNode)
            }
            // 新加入节点后的路径是否比 原来的路径长，如果较短，则把该路径的父亲节点设置为 这个 minNode
            if ((distance + edge.weight) < distanceMap.get(toNode)) {
                parentMap.set(toNode, minNode)
            }
            // 如果存在，看下是否需要更新最小值路径
            distanceMap.set(toNode, Math.min(distanceMap.get(toNode), distance + edge.weight))
        }
        selectNodes.add(minNode)
        minNode = getMinDistanceAndUnselectedNode(distanceMap, selectNodes)
    }
    return parentMap
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

// 如果需要打印 yuan 到 E 的路径。先获取 E 的节点，然后从 reuslt 这个 Map 中依次往上找即可

let ENode = graph.nodes.get('E')

const pathNodes = []

while (ENode) {
    const parent = result.get(ENode)
    if (parent) {
        pathNodes.push(parent)
    }
    ENode = parent
}

while (pathNodes.length) {
    console.log(pathNodes.pop().value)
}

// const db = 