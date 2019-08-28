
/**
 * 左树是搜索二叉树，右树也是搜索二叉树，并且左树的所有节点都比当前节点小；右树的所有节点都比当前节点大。
 * 任意节点的左、右子树也分别为搜索二叉树；
 * 从左子树中获取信息，从右子树上获取信息，然后把信息做整合，再从这个节点往上抛
 */


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class searchBinaryTree {
    constructor(isSearchBinaryTree, max, min) {
        this.isSearchBinaryTree = isSearchBinaryTree
        this.max = max
        this.min = min
    }
}

function process(node) {
    return __process(node).isSearchBinaryTree
}

//  [3,null,30,10,null,null,15,null,45]
function __process(node) {
    if (!node) {
        return new searchBinaryTree(true, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }

    const leftSearchBinaryTree = __process(node.left)
    const rigthSearchBinaryTree = __process(node.right)

    let isSearchBinaryTree = false
    if (leftSearchBinaryTree.isSearchBinaryTree 
        && rigthSearchBinaryTree.isSearchBinaryTree 
        && leftSearchBinaryTree.max < node.value 
        && rigthSearchBinaryTree.min > node.value) {
        isSearchBinaryTree = true
    }
    const max = Math.max(node.value, leftSearchBinaryTree.max, rigthSearchBinaryTree.max)
    const min = Math.min(node.value, leftSearchBinaryTree.min, rigthSearchBinaryTree.min)

    return new searchBinaryTree(isSearchBinaryTree, max, min)
}


// let head = new Node(10);
// head.left = new Node(2);
// head.right = new Node(20);
// head.left.left = new Node(1);
// head.left.right = new Node(5);
// head.right.left = new Node(12);
// head.right.right = new Node(22);

// console.log('the tree is searchBinaryTree: ', process(head))

let head = new Node(3);
// head.left = new Node(2);
head.right = new Node(30);
// head.left.left = new Node(1);
// head.left.right = new Node(5);
head.right.left = new Node(10);
head.right.left.right = new Node(15)
head.right.left.right.right = new Node(45)
// head.right.right = new Node(22);

console.log('the tree is searchBinaryTree: ', process(head))