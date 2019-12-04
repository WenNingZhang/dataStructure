class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class MaxDistance {
    constructor(maxDistance, height) {
        this.maxDistance = maxDistance
        this.height = height
    }
}


function __process(node) {
    if (!node) {
        return new MaxDistance(0, 0)
    }
    const left = __process(node.left)
    const right = __process(node.right)

    const height = Math.max(left.height, right.height) + 1
    const p1 = left.maxDistance
    const p2 = right.maxDistance
    const p3 = left.height + right.height
    const maxDistance = Math.max(p1, p2, p3)
    return new MaxDistance(maxDistance, height)
}

function process(node) {
    return __process(node).maxDistance
}

let head = new Node(1);
head.left = new Node(2);
head.right = new Node(3);
head.left.left = new Node(4);
head.left.right = new Node(5);

console.log('max distance is :', process(head))

