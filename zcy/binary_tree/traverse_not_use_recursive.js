
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Stack {
    constructor(length) {
        this.arr = []
        this.next = 0	// 1、表示栈大小	2、表示下一个入栈的数放的位置
    }

    peek() {
        if (this.next === 0) {
            return null
        }
        return this.arr[this.next - 1]
    }

    push(value) {
        this.arr[this.next++] = value
    }

    pop() {
        if (this.next === 0) {
            console.error('栈空，无法弹出')
            return
        }
        return this.arr[--this.next]
    }

    isEmpty() {
        return this.next === 0
    }
}

function preOrderUnRecur(head) {
    if (!head) {
        return null
    }

    const stack = new Stack()
    stack.push(head)

    while (!stack.isEmpty()) {
        const node = stack.pop()
        console.log('preOrderUnRecur value is : ===>', node.value)
        // 这里有个易错点，前序遍历的顺序是 值、左孩子、右孩子。但是栈的顺序是先进后去的。因此需要先把右孩子入栈，然后是左孩子。这时先出栈就是
        // 左孩子了
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
}
// 中序非递归遍历
function inOrderUnRecur(head) {
    if (!head) {
        return null
    }

    const stack = new Stack()
    while (!stack.isEmpty() || head !== null) {
        if (head !== null) {
            stack.push(head)
            head = head.left
        } else {
            head = stack.pop()
            console.log('inOrderUnRecur value is : ===>', head.value)
            head = head.right
        }
    }
}

// 后序遍历的非递归操作
function postOrderUnRecur(head) {
    if (!head) {
        return null
    }

    const stack = new Stack()
    const help = new Stack()
    stack.push(head)

    while (!stack.isEmpty()) {
        const node = stack.pop()
        help.push(node.value)
        // 进 help栈 的顺序是: 根、右、左,然后在把这些节点放入一个栈中。然后依次打印。就是 左孩子、右孩子、根
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }

    while (!help.isEmpty()) {
        console.log('postOrderUnRecur value is : ===>', help.pop())
    }
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


preOrderUnRecur(head)

console.log('=================分隔符=================')

inOrderUnRecur(head)

console.log('=================分隔符=================')

postOrderUnRecur(head)