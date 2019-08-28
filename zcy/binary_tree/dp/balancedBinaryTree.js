/**
 * 平衡二叉树是左边是平衡二叉树，右边是平衡二叉树，且左右两棵子树高度差不超过1。则为平衡二叉树。
 * 从左子树获取信息，从右子树获取信息，然后把信息作整合，在从这个节点往上抛
 * 整棵树的信息是取决于每个节点的信息，这种方式可以用树形dp。
 * 
 */

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class balanceBinaryTree {
    constructor(isBalance, heigth) {
        this.isBalance = isBalance
        this.heigth = heigth
    }
}

function process(node) {
    return __process(node).isBalance
}

function __process(node) {
    if (!node) {
        return new balanceBinaryTree(true, 0)
    }
    const leftBalanceBinaryTree = __process(node.left)
    const rightBalanceBinaryTree = __process(node.right)

    let isBalance = true

    if (!leftBalanceBinaryTree.isBalance || !rightBalanceBinaryTree.isBalance) {
        isBalance = false
    }
    if (Math.abs(leftBalanceBinaryTree.heigth - rightBalanceBinaryTree.heigth) > 1) {
        isBalance = false
    }

    const heigth = Math.max(leftBalanceBinaryTree.heigth, rightBalanceBinaryTree.heigth) + 1

    return new balanceBinaryTree(isBalance, heigth)
}

let head = new Node(5);
head.left = new Node(3);
head.right = new Node(8);
head.left.left = new Node(2);
head.left.right = new Node(4);
head.left.left.left = new Node(1);
head.right.left = new Node(7);
head.right.left.left = new Node(6);
head.right.right = new Node(10);
head.right.right.left = new Node(9);
head.right.right.right = new Node(11);

console.log('the tree is BalanceBinaryTree: ', process(head))