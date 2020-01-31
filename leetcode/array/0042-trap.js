/**
 * 接雨水问题
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，
在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

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

/**
 * 注: 其实思想是单调栈的思想。
 * 单调栈的特征
 * 1. 栈中放的是数组的索引。
 * 2. 依次放入顺序是从小到大，或者从大到小。但是要符合这一规则，如果不满足。则弹出。
 * 用栈保存每堵墙。
 * 当遍历每堵墙时，如果当前高度小于栈高度。说明这里可能会有积水。我们将墙的高度下标入栈
 * 而如果当前高度大于栈顶的高度时。说明以前的积水到这里停下了，我们可以计算下有多少积水了。计算完，就把当前的墙继续入栈。作为新的积水的墙。
 * 总体的原则就是，

当前高度小于等于栈顶高度，入栈，指针后移。
当前高度大于栈顶高度，出栈，计算出当前墙和栈顶的墙之间水的多少，然后计算当前的高度和新栈的高度的关系，重复第 2 步。直到当前墙的高度不大于栈顶高度或者栈空，然后把当前墙入栈，指针后移。

时间复杂度是 O(N)。因为是顶多是把所有数入栈。而操作栈中的值挺多是两次。也就是 2N。因此时间复杂度是 O(N)
空间复杂度是 O(N)。因为使用了栈。
 * @param {*} height 
 */
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