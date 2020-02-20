/**
 * 1209. Remove All Adjacent Duplicates in String II
 * Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

 We repeatedly make k duplicate removals on s until we no longer can.

 Return the final string after all such duplicate removals have been made.

 It is guaranteed that the answer is unique.
 **/

class Stack {
    constructor() {
        this.arr = [];
        this.next = 0;   // 1. 表示栈大小 2.表示一个栈中数放入的位置
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

class Node {
    constructor(ch) {
        this.ch = ch
        this.times = 1
    }
}
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = new Stack()
    for(let i = 0; i < s.length; i++) {
        const ch = s[i]
        if (stack.isEmpty() || ch !== stack.peek().ch) {
            stack.push(new Node(ch))
        }else {
            const times = stack.peek().times
            if (times + 1 === k) {
                stack.pop()
            } else {
                stack.peek().times = times + 1
            }
        }
    }
    let list = []
    while (!stack.isEmpty()) {
        const node = stack.pop()
        for(let i = 0; i < node.times; i++) {
            list.push(node.ch)
        }
    }

    return list.reverse().join('')
};

let s = "deeedbbcccbdaa", k = 3
console.log(removeDuplicates(s, k))

/**
 * 思路 :
 * 1. iterate from left to right
 * 2. cache each char and their repeated(left) times
 * 3. equal to k pop
 * 4. otherwish update the frequency
 **/
