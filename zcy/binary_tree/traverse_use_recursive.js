class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function preOrderRecur(head) {
    if (!head) {
        return null
    }
    console.log('preOrder value is : ===>', head.value)
    preOrderRecur(head.left)
    preOrderRecur(head.right)
}

function inOrderRecur(head) {
    if (!head) {
        return null
    }
    inOrderRecur(head.left)
    console.log('inOrder value is : ===>', head.value)
    inOrderRecur(head.right)
}

function postOrderRecur(head) {
    if (!head) {
        return null
    }
    postOrderRecur(head.left)
    postOrderRecur(head.right)
    console.log('postOrder value is: ===>', head.value)
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

preOrderRecur(head)

console.log('=================分隔符=================')

inOrderRecur(head)

console.log('=================分隔符=================')

postOrderRecur(head)