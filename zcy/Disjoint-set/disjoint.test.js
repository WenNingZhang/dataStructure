
const UnionFindSet = require('./disjoint.js')
const list = ['A', 'B', 'C', 'D', 'E']

const map = new UnionFindSet(list)

map.union('A', 'C')
map.union('B', 'D')
map.union('D', 'E')

map.union('C', 'E')
map.union('C', 'E')


console.log(map)