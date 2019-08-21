class Queue{
	//  length 表示初始化的数组长度
	constructor(lenght) {
		this.arr = []
		this.size = 0	// 为了不让start和 end 相互牵制。引入一个变量 size。表示队列的长度
		this.start = 0	// 表示拿一个数应该从哪儿拿
		this.end = 0	// 表示新加一个数应该放哪
		this.lenght = lenght
	}

	peek() {
		if (this.size === 0) {
			return null
		}
		return this.arr[this.start]
	}

	push(value) {
		if (this.lenght === this.size) {
			console.error('队列已满')
			return
		}
		this.size++
		this.arr[this.end] = value
		this.end = this.end === this.lenght-1 ? 0 : this.end + 1
	}

	pop() {
		if (this.size === 0) {
			console.error('队列已空')
			return
		}
		this.size--
		let tmp = this.arr[this.start]

		this.start = this.start === this.lenght - 1 ? 0 : this.start + 1

		return tmp
	}
}