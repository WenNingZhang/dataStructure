
// 在一个数组中，确定左右两侧比它小的数是那些，如果没有返回-1
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

function getNearLess(arr) {
    const res = []
    const stack = new Stack(arr.length)
    for(let i = 0; i < arr.length; i++) {
        while (!stack.isEmpty() && arr[i] < arr[stack.peek()[0]]) {
            const popIndexList = stack.pop()
            const leftLessIndex = stack.isEmpty() ? -1 : stack.peek()[stack.peek().length-1]
            for(let j = 0; j < popIndexList.length; j++) {
                const popIndex = popIndexList[j]
                const node = new indexNode(popIndex, leftLessIndex, i)
                res.push(node)
            }
        }
        if (!stack.isEmpty() && arr[i] === arr[stack.peek()[0]]) {
            stack.peek().push(i)
        } else {
            const list = []
            list.push(i)
            stack.push(list)
        }
    }
    while (!stack.isEmpty()) {
        const popIndexList = stack.pop()
        const leftLessIndex = stack.isEmpty() ? -1 : stack.peek()[stack.peek().length - 1]
        for(let j = 0; j < popIndexList.length; j++) {
            const popIndex = popIndexList[j]
            const node = new indexNode(popIndex, leftLessIndex, -1)
            res.push(node)
        }
    }
    console.log(res)
    return res
}

const arr = [3,2,3,4,3,6,3,2,1]
getNearLess(arr)
