function TreeNode(element, left = null, right = null) {
    return Object.assign({}, {element, left, right});
}


// 右脚 yin ,假如待插入节点不存在，一直秃噜到叶子，新建该节点，然后再秃噜到根，完成插入。
function Insert(element, tree = null) {
    if (tree === null) {
        tree = TreeNode(element);
    } else if (element < tree.element) {
        tree.left = Insert(element, tree.left);
    } else if (element > tree.element) {
        tree.right = Insert(element, tree.right);
    }
    return tree;
}




// 获取该二叉树的所有路径，其实就是树的前序遍历，拿到头，把节点信息存储好，往下一次遍历左孩子、右孩子
// 路径的特点是 左孩子和右孩子的子节点 都是 null
let paths = []
function getPathLib(trees, path = [], pathLen = 0) {
    if (!trees) return null

    path[pathLen] = trees.element
    pathLen++

    if (trees.left === null && trees.right === null) {

        paths.push(path)

    } else {

        getPathLib(trees.left, [...path], pathLen)
        getPathLib(trees.right, [...path], pathLen)

    }
}

function getPath(trees) {

    let paths = []
    getPathLib(trees)

    function getPathLib (trees, path = [], pathLen = 0)  {
        if (!trees) return null

        path[pathLen] = trees.element
        pathLen++

        if (trees.left === null && trees.right === null) {

            paths.push(path)

        } else {

            getPathLib(trees.left, [...path], pathLen)
            getPathLib(trees.right, [...path], pathLen)

        }
    }

    return paths
}


module.exports = {
    Insert: Insert,
    getPath: getPath
};







