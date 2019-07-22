
class Stack{
	constructor(length) {
		this.arr = []
		this.next = 0	// 1、表示栈大小	2、表示下一个入栈的数放的位置
        this.length = length	// 根据题意是栈的固定大小
	}

	peek() {
		if (this.next === 0) {
			return null
		}
		return this.arr[this.next-1]
	}

	push(value) {
		if (this.next === this.length) {
			console.error('栈满，无法压入')
			return 
		}
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

class MinStack {
    constructor(length) {
        this.stack = new Stack(length)
        this.minStack = new Stack(length)
    }

    push(value) {
        this.stack.push(value)
        if (this.minStack.isEmpty()) {
            this.minStack.push(value)
        } else {
            this.minStack.push(Math.min(this.minStack.peek(), value))
        }
    }

    pop() {
        this.minStack.pop()
        return this.stack.pop()
    }

    min() {
        return this.minStack.peek()
    }
}

const length = 10
const minStack = new MinStack(length)

minStack.push(1)
minStack.push(2)
minStack.push(3)
minStack.push(4)
minStack.push(5)

console.log('minStack===>', minStack)
console.log('The current min value of the stack is :', minStack.min())