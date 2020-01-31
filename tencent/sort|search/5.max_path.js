function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var maxPathSum = function(root) {

    class BinaryTreeMaxPath {
        constructor(maxPath) {
            this.maxPath = maxPath
        }
    }

    function __maxPathSum(root) {
        if (!root) {
            return new BinaryTreeMaxPath(0)
        }
        let left = __maxPathSum(root.left)
        let right = __maxPathSum(root.right)

        let lmr = root.val + Math.max(0, left.maxPath) + Math.max(0, right.maxPath);
	    let ret = root.val + Math.max(0, left.maxPath, right.maxPath);
	    let max = Math.max(root.val, lmr, ret);
        return new BinaryTreeMaxPath(max)
    }

    const binaryTreePath = __maxPathSum(root)
    return binaryTreePath.maxPath
};

const head = new TreeNode(1)
head.left = new TreeNode(-2)
head.right = new TreeNode(3)

console.log(maxPathSum(head))
