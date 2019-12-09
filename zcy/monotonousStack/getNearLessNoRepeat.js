
// 在一个数组中，确定左右两侧比它小的并且离它最近的数是那个，如果没有返回-1
// 每个值中，左右两侧如果没有比它小的数值，则默认设置为 -1
class indexNode {
    constructor(index = -1, left = -1, right = -1) {
        this.index = index
        this.left = left
        this.right = right
    }
}

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

function getNearLessNoRepeat(arr) {
    const res = []
    const stack = new Stack(arr.length)
    for(let i = 0; i < arr.length; i++) {
        while (!stack.isEmpty() && arr[i] < arr[stack.peek()]) {
            const popIndex = stack.pop()
            const leftLessIndex = stack.isEmpty() ? -1 : stack.peek()
            const node = new indexNode(popIndex, leftLessIndex, i)
            res.push(node)
        }
        stack.push(i)
    }
    while (!stack.isEmpty()) {
        const popIndex = stack.pop()
        const node = new indexNode(popIndex, stack.isEmpty() ? -1 : stack.peek(), -1)
        res.push(node)
    }
    console.log(res)
    return res
}

const arr = [3,4,5,2,6]
getNearLessNoRepeat(arr)
