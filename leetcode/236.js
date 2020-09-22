
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return  null
    if (p === root || q === root) return root
    // 获取到信息后往上抛
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, q, q)

    if (left && right) {
        return  root
    }else if (left === null && right === null) {
        return null
    }
    return left ? left : right
};
