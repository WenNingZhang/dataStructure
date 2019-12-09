
/**
 * 相交链表
 编写一个程序，找到两个单链表相交的起始节点。
 * 如果两个链表没有交点，返回 null.
 在返回结果后，两个链表仍须保持原有的结构。
 可假定整个链表结构中没有循环。
 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 **/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null
    let curA = headA
    let curB = headB
    let lenA = 0
    let lenB = 0

    while (curA) {
        lenA++
        curA = curA.next
    }
    while (curB) {
        lenB++
        curB = curB.next
    }

    curA = headA
    curB = headB

    if (lenA > lenB ) {
        let diff = lenA - lenB
        while (diff !== 0 && curA) {
            curA = curA.next
            diff--
        }
    }

    if (lenB > lenA ) {
        let diff = lenB - lenA
        while (diff !== 0 && curB) {
            curB = curB.next
            diff--
        }
    }

    while (curA && curB) {
        if (curA === curB) {
            return curA
        }
        curA = curA.next
        curB = curB.next
    }

    return null
};

class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(9)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = null


const node5 = new Node(2)
const node6 = new Node(4)
const node7 = new Node(9)
// const node8 = new Node(10)
node5.next = node6
node6.next = node7
node7.next = node2
// node8.next = null

console.log(getIntersectionNode(node1, node5))
