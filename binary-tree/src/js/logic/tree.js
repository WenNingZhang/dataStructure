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


module.exports = {
    Insert: Insert
};







