class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};

let head = new Node(3);
head.left = new Node(9);
head.right = new Node(20);
head.right.left = new Node(15);
head.right.right = new Node(7);

// console.log(JSON.stringify(head, null, 2));

console.log(maxDepth(head));
