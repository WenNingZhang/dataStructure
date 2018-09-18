
const generatorRandom = require('./random')
const treeDataToD3 = require('./treeDataToD3')
const {Insert} = require('./tree')


module.exports = (nums) => {
    const randoms = generatorRandom(nums)
    const trees = randoms.reduce((tree,random) => Insert(random, tree), null)
    return treeDataToD3(trees)
}
