class Stack {
    constructor() {
        this.arr = [];
        this.next = 0;	// 1、表示栈大小	2、表示下一个入栈的数放的位置
    }

    // 取出栈顶元素
    peek() {
        if (this.next === 0) {
            return null;
        }
        return this.arr[this.next - 1];
    }

    // 放入栈元素，并且next指针++
    push(value) {
        this.arr[this.next++] = value;
    }

    // 出栈。
    pop() {
        if (this.next === 0) {
            console.error('栈空，无法弹出');
            return;
        }
        return this.arr[--this.next];
    }

    isEmpty() {
        return this.next === 0 ? true : false;
    }
}

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const stack1 = new Stack();
    const stack2 = new Stack();
    let res = [];
    let n1 = l1[0];
    let n2 = l2[0];

    while (n1 || n2) {
        const value1 = n1 ? n1.val : 0;
        stack1.push(value1);
        const value2 = n2 ? n2.val : 0;
        stack2.push(value2);
        n1 = n1.next;
        n2 = n2.next;
    }
    let carry = 0;
    while (!stack1.isEmpty()) {
        const sum = carry + stack1.pop() + stack2.pop();
        res.push(sum % 10);
        carry = parseInt(sum / 10);
    }
    return res;
}

const node1 = new Node(2);
const node2 = new Node(4);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;


const node4 = new Node(5);
const node5 = new Node(6);
const node6 = new Node(4);

node4.next = node5;
node5.next = node6;

// console.log(addTwoNumbers([node1, node2, node3], [node4, node5, node6]))

/**
 * public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    while (p != null || q != null) {
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}

 */

function _addTwoNumbers(l1, l2) {
    let dummyHead = new Node(0);
    let p = l1;
    let q = l2;
    let cur = dummyHead;

    let carry = 0;
    while (p || q) {
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        const sum = carry + x + y;
        carry = parseInt(sum / 10);
        cur.next = new Node(sum % 10);
        cur = cur.next;
        if (p) p = p.next;
        if (q) q = q.next;
    }

    if (carry > 0) {
        cur.next = new Node(carry);
    }
    return dummyHead.next;
}

console.log(_addTwoNumbers(node1, node4));
