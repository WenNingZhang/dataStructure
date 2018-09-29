
const generatorRandom = require('./random')
const treeDataToD3 = require('./treeDataToD3')

import {
    Insert as inserLib,
    getPath as getPathLib,
    getNodeCount
} from './tree'



function Insert(nums) {
    const randoms = generatorRandom(nums)
    const trees = randoms.reduce((tree,random) => inserLib(random, tree), null)

    const treesD3 = treeDataToD3(trees)

    return { randoms, trees, treesD3 }
}

function getPath(trees) {

    let paths = getPathLib(trees)

    paths = paths.map(path => path.join('-'))

    return paths
}


module.exports = {
    Insert: Insert,
    getPath: getPath,
    getNodeCount: getNodeCount
}
