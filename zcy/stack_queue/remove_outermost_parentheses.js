/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    
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
			if (this.next === 0) {
				console.error('栈空，无法弹出')
				return
			}
			return this.arr[--this.next]
		}
	}

	const stack = new Stack()

	let parentheses = ''
	// 入栈
	for(let i = 0; i < S.length; i++) {
		// 获取栈顶元素，判断将要入栈的元素和栈顶元素是否可以组成一个括号'()'。
		// 可以组成括号，栈元素出栈。
		// 否则，入栈

		const peek = stack.peek()
		const char = S.charAt(i)

		if (stack.next === 0) {
			stack.push(S.charAt(i))
			continue
		}

		if (peek === char) {
			stack.push(S.charAt(i))
		} else if (stack.next !== 1){
			parentheses += stack.pop()
			parentheses += char
		} else {
			stack.pop()
		}
	}
	
	console.log('====>', parentheses)

};

removeOuterParentheses('(()(()))')