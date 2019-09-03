/**
 * 图的遍历、宽度优先遍历，Breadth First Search
 * 先把节点的子孩子遍历完，像是朋友圈
 */

const createGraph = require('./graphGenerator')
function bfs(node) {
    if (!node) {
        return null
    }
    const result = []
    const queue = []    // 存储节点的队列
    const set = new Set()   // 记录那些节点已经放到队列中
    queue.push(node)
    set.add(node)
    while (queue.length !== 0) {
        const cur = queue.shift()   // 移除队列最前一个元素并返回该元素值
        result.push(cur.value)
        for (let next of cur.nexts) {
            if (!set.has(next)) {
                set.add(next)
                queue.push(next)
            }
        }
    }
    return result
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

console.log('宽度优先遍历图 bfs ===>', bfs(graph.nodes.get('a')))