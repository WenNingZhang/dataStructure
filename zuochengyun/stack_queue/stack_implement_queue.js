// stack inplements queue

class Stack{
	constructor() {
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
		return this.arr[--this.next]
	}
}

class Queue {
    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    push(value) {
        this.dao()
        this.stack1.push(value)
    }

    pop() {
        // 把在栈1的数据导入栈2中
        this.dao()
        return this.stack2.pop()
    }

    peek() {
        this.dao()
        return this.stack2.peek()
    }

    // 从 stack1 把数据倒入 stack2
    //  要确保每次倒入 stack2 是空的。并且stack1要全部倒出
    dao() {
        if (this.stack1.next === 0 && this.stack2.next === 0) {
            console.error('倒出数据失败')
            return
        }

        if (this.stack2.next === 0) {
            while(this.stack1.next !== 0) {
                this.stack2.push(this.stack1.pop())
            }
        }
    }
}

const queue = new Queue()

queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)

console.log(queue)
console.log(queue.pop())
console.log(queue)
console.log(queue.pop())
console.log(queue.peek())
console.log(queue.pop())
console.log(queue)
