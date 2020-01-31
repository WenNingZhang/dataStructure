
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
var kthSmallest = function(root, k) {
    let list = []
    function inOrderRecur(head) {
        if (!head) {
            return null
        }
        inOrderRecur(head.left)
        list.push(head.val)
        inOrderRecur(head.right)
        return list
    }
    inOrderRecur(root)
    return list[k-1]
};

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

let value = kthSmallest(head, 2)
console.log(value)