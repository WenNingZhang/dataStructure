
const UnionFindSet = require('./disjoint.js')

const list = ['A', 'B', 'C', 'D', 'E']

const map = new UnionFindSet(list)

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

console.log('\n')
// const row = m1.length
// const col = m1[0].length

const topPartRow = parseInt(m1.length / 2)

// const leftPartCol = parseInt(col/2)

// const count = countIslands(m1, row, col)

let lastM1 = m1.splice(topPartRow)

// console.log('the island is :', count)

m1.forEach(item => console.log(item))
console.log('\n')
lastM1.forEach(item => console.log(item))

const _m1_count = countIslands(m1)
const _lastM1_count = countIslands(lastM1)



console.log('the m1、lastM2 isLands is :', _m1_count, _lastM1_count)
