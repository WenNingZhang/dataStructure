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

const stack	= new Stack(10)

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

console.log(stack)

stack.pop()
stack.pop()

console.log(stack)