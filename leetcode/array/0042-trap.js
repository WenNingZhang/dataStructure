/**
 * 接雨水问题
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，
在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
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

    isEmpty() {
        return this.next === 0
    }
}

function trap(height) {
    const stack = new Stack()
    let currentIndex = 0
    let sum = 0
    while(currentIndex < height.length) {
        while(!stack.isEmpty() && height[stack.peek()] < height[currentIndex]) {
            const index = stack.pop()
            if (stack.isEmpty()) {
                break
            }
            const h = height[index]
            const distance = currentIndex - stack.peek() - 1
            const min = Math.min(height[currentIndex], height[stack.peek()])
            sum += distance * (min - h)
        }
        stack.push(currentIndex)
        currentIndex++
    }
    return sum
}

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))