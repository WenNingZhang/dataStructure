// 1、(容器方法) 借助数组===> 数组方法
function isPalindrome_array(arr) {
	let i = 0
	let j = arr.length - 1

	while(i <= j) {
		if (arr[i] !== arr[j]) {
			return false
		}
		i++
		j--
	}
	return true
}

// 2、(容器方法) 借助栈 ===> 栈的方法

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

function isPalindrome_stack(arr) {

	const stack = new Stack()
	arr.forEach(element => {
		stack.push(element)
	});

	let i = 0
	while(i < arr.length) {
		if (arr[i] !== stack.pop()) {
			return false
		}
		i++
	}

	return true
}


const arr = [1,2,3,4,5]
console.log(`${arr} is isPalindrome_array :`, isPalindrome_array(arr))

const arr1 = [1,2,3,4,5,4,3,2,1]
console.log(`${arr1} is isPalindrome_array :`, isPalindrome_array(arr1))

console.log('\nbelow use stack handle\n')
console.log(`${arr} is isPalindrome_stack :`, isPalindrome_stack(arr))

console.log(`${arr1} is isPalindrome_stack :`, isPalindrome_stack(arr1))