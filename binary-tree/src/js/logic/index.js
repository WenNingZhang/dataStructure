
const generatorRandom = require('./random')
const treeDataToD3 = require('./treeDataToD3')

import {
    Insert as inserLib,
    getPath as getPathLib
} from './tree'


// module.exports = (nums) => {
//     const randoms = generatorRandom(nums)
//     const trees = randoms.reduce((tree,random) => Insert(random, tree), null)
//     return treeDataToD3(trees)
// }


function Insert(nums) {
    const randoms = generatorRandom(nums)
    const trees = randoms.reduce((tree,random) => inserLib(random, tree), null)

    const treesD3 = treeDataToD3(trees)

    return { trees, treesD3 }
}

function getPath(trees) {
    // console.log('**********trees', trees)
    let paths = getPathLib(trees)

    // console.log('**********-------', paths)
    paths = paths.map(path => path.join('-'))

    return paths
}


module.exports = {
    Insert: Insert,
    getPath: getPath
}
