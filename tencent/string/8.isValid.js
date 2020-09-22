/**
 * 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
 */

class Stack {
    constructor() {
        this.arr = []
        this.next = 0	// 1、表示栈大小	2、表示下一个入栈的数放的位置
    }

    // 取出栈顶元素
    peek() {
        if (this.next === 0) {
            return null
        }
        return this.arr[this.next - 1]
    }

    // 放入栈元素，并且next指针++
    push(value) {
        this.arr[this.next++] = value
    }

    // 出栈。
    pop() {
        if (this.next === 0) {
            console.error('栈空，无法弹出')
            return
        }
        return this.arr[--this.next]
    }

    isEmpty() {
        return this.next === 0 ? true : false
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = new Stack()
    const items = s.split('')
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (['(', '{', '['].indexOf(item) >= 0) {
            stack.push(item)
        } else {
            if (item === ')') {
                if (stack.peek() === '(') {
                    stack.pop()
                } else {
                    return false
                }
            }
            if (item === '}') {
                if (stack.peek() === '{') {
                    stack.pop()
                } else {
                    return false
                }
            }
            if (item === ']') {
                if (stack.peek() === '[') {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
    }
    return stack.isEmpty()
};


let a = "()"

console.log(isValid(a))

let b = "()[]{}"
console.log(isValid(b))

let c = "([)]"
console.log(isValid(c))
