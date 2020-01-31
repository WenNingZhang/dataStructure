/**
 * 二叉搜索树的最大公共祖先
 * 
 * 算法
 * 1、从根节点开始遍历树
 * 2、如果节点p/q都在右子树上，那么以右子树为根节点继续1的操作
 * 2、如果节点q/q都在左子树上，那么以左子树为根节点上继续1的操作
 * 3、如果2/3都不成立，这就意味着找到 q/q 的公共祖先(LCA)了
 */

var lowestCommonAncestor = function(root, p, q) {
    
    if (!root) return null;
   return p.val <= q.val ? findCommonAncestor(root, p, q) : findCommonAncestor(root, q, p);
   
   function findCommonAncestor(root, p, q) {
       if (!root) return null;
       if (root.val < p.val && root.val < q.val) {
           return findCommonAncestor(root.right, p, q);
       } else if (root.val > p.val && root.val > q.val) {
           return findCommonAncestor(root.left, p, q);
       } else if (root.val >= p.val && root.val <= q.val) {
           return root;
       }
   }
};

