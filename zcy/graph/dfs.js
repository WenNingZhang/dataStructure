/**
 * 图的遍历、深度优先遍历 Depth First Search
 * 顺着一条边把该边上的所有节点都遍历完成，再去遍历另外一条边
 * https://www.cnblogs.com/skywang12345/p/3711483.html
 */

const createGraph = require('./graphGenerator.js')
function dfs(node) {
    if (!node) {
        return null
    }
    const result = []
    const stack = []    // 存储节点的栈
    const set = new Set()   // 判断是否还有岔路没走
    stack.push(node)
    set.add(node)
    result.push(node.value)
    while (stack.length !== 0) {
        const cur = stack.pop()   // 移除栈顶元素
        for (let next of cur.nexts) {
            if (!set.has(next)) {
                stack.push(cur)
                stack.push(next)
                set.add(next)
                result.push(next.value)
                // console.log(cur.value)
                break
            }
        }
    }
    return result
}

const matrix = [
    [1, 'a', 'b'],
    [2, 'b', 'c'],
    [3, 'c', 'e'],
    [4, 'e', 'd'],
    [4, 'e', 'b'],
    [5, 'd', 'c'],
    [6, 'b', 'e'],
    [7, 'b', 'f'],
    [7, 'f', 'g'],
]

const graph = createGraph(matrix)

console.log('深度优先遍历图 dfs ===>', dfs(graph.nodes.get('a')))