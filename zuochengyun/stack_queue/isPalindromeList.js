class Stack{
	constructor(length) {
		this.arr = []
		this.next = 0	// 1、表示栈大小	2、表示下一个入栈的数放的位置
	}

	peek() {
		if (this.next === 0) {
			return null
		}
		return this.arr[this.next-1]
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
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


function isPalindrome1(head) {
    let cur = head
    const stack = new Stack()
    // 把链表中的数据入栈
    while(cur) {
        stack.push(cur)
        cur = cur.next
    }
    // 栈出栈和链表进行比较。
    while(head) {
        if (head.value !== stack.pop().value) {
            return false
        }
        head = head.next
    }
    return true
}

const node1 = new Node(10)
const node2 = new Node(1)
const node3 = new Node(20)
const node4 = new Node(1)
const node5 = new Node(10)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5



console.log(node1)
console.log('through container(stack) decide palindrome is :', isPalindrome1(node1))