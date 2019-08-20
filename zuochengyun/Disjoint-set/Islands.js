function countIslands(m) {
    const row = m.length
    const col = m[0].length

    let count = 0
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if (m[i][j] === 1) {
                count++
                infect(m, row, col, i, j)
            }
        }
    }
    return count
}

/**
 * 敢惹不同节点
 * @param {*} m 
 * @param {*} row 
 * @param {*} col 
 * @param {*} i 
 * @param {*} j 
 */
function infect(m, row, col, i, j) {
    if (i >= 0 && i < row && j >= 0 && j < col && m[i][j] === 1) {
        m[i][j] = 2
        infect(m, row, col, i - 1, j)
        infect(m, row, col, i + 1, j)
        infect(m, row, col, i, j - 1)
        infect(m, row, col, i, j + 1)
    }
}

const m1 = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 1, 1, 1, 1, 1, 1, 1, 0 ],
    [ 0, 1, 1, 1, 0, 0, 0, 1, 0 ],
    [ 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
]

m1.forEach(item => console.log(item))

const count = countIslands(m1)

console.log('the island is :', count)
m1.forEach(item => console.log(item))