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
}

class MinStack{
	constructor(len) {
		this.dataStack = new Stack(len)
		this.minStack = new Stack(len)
	}

	push(value) {
		//  该栈是空的,暂时先这么比较。
		if (this.minStack.next === 0) {
			this.minStack.push(value)
		} else {
			this.minStack.push(Math.min(value, this.minStack.peek()))
		}
		
		this.dataStack.push(value)
	}

	pop() {
		this.minStack.pop()
		return this.dataStack.pop()
	}

	getMin() {
		return this.minStack.peek()
	}

}

const minStack = new MinStack(10)

minStack.push(10)
minStack.push(10)
minStack.push(2)
minStack.push(3)
minStack.push(1)
console.log('this is minStack : ', minStack)
console.log('the min Stack is : ', minStack.getMin())

console.log('the stack pop is: ', minStack.pop())

console.log('this is minStack : ', minStack)
console.log('the min Stack is : ', minStack.getMin())

