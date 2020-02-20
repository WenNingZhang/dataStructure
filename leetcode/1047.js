/**
 * 1047. Remove All Adjacent Duplicates In Strings
 */


class Stack {
    constructor() {
        this.arr = []
        this.next = 0   // 1. 表示栈大小 2. 表示一个栈中数放入的位置
    }

    peek() {
        if (this.next === 0) {
            return null
        }
        return this.arr[this.next - 1]
    }

    push(value) {
        this.arr[this.next++] = value
    }

    pop() {
        return this.arr[--this.next]
    }

    isEmpty() {
        return this.next === 0
    }


}
/**
 * @param {string} str
 * @return {string}
 */
var removeDuplicates = function(str) {
    const stack = new Stack()
    for(let i = 0; i < str.length; i++) {
        const ch = str[i]
        if (stack.isEmpty() || ch !== stack.peek()) {
            stack.push(ch)
        }else {
            stack.pop()
        }
    }
    let list = []
    while (!stack.isEmpty()) {
        list.push(stack.pop())
    }
    return list.reverse().join('')
};


console.log(removeDuplicates("abbaca"))
