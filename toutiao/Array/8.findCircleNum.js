/**
 * @param {number[][]} M
 * @return {number}
 */
// var findCircleNum = function (M) {
//     let result = 0
//     for(let i =0 ; i < M.length; i++) {
//         for(let j = 0;  j < M[0].length; j++) {
//             if (M[i][j] === 1) {
//                 result++
//                 help(M, i, j)
//             }
//         }
//
//     }
//
//     return result
//
//     function help(M, i, j) {
//         if (i >= 0 && i < M.length && j >= 0 && j < M[0].length && M[i][j]===1) {
//             M[i][j] = 2
//             help(M, i + 1, j)
//             help(M, i - 1, j)
//             help(M, i, j + 1)
//             help(M, i, j - 1)
//         }
//     }
// };
/**
 * 那么比较直接的方式就是DFS 搜索，对于某个人，遍历其好友，然后在遍历其好友的好友，那么就能吧属于同一个朋友圈的人都遍历一遍。
 同时标记已经遍历过的人。然后累计朋友圈的个数。再去遍历没有遍历到人找其朋友圈的人。
 * @param M
 * @returns {number}
 */
var findCircleNum = function(M) {
    let visited = new Array(M.length).fill(false), cnt = 0
    for (let i = 0; i < M.length; i++) {
        if (visited[i] === false) {
            helper(M, visited, i)
            cnt++
        }
    }
    return cnt
};

const helper = function(mat, visited, i) {
    visited[i] = true
    for (let j = 0; j < mat.length; j++) {
        if (mat[i][j] === 1 && visited[j] === false) {
            helper(mat, visited, j)
        }
    }
}

let list = [
    [1,0,0,1],
    [0,1,1,0],
    [0,1,1,1],
    [1,0,1,1]
]


console.log(findCircleNum(list))


