/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function Node(value, next = null) {
     this.value = value
     this.next = next
 }
//  【相交链表】编写一个程序，找到两个单链表相交的起始节点。
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let head1 = headA
    let length1 = 0
    let head2 = headB
    let length2 = 0
    while(head1) {
        length1++
        head1 = head1.next
    }
    while(head2) {
        length2++
        head2 = head2.next
    }

    if (length1 < length2) {
        let length = length2 - length1
        while(length > 0) {
            headB = headB.next
            length--
        }
    }

    if (length2 < length1) {
        let length = length1 - length2
        while(length > 0) {
            headA = headA.next
            length--
        }
    }

    while(headA) {
        if (headA === headB) {
            return headA
        } else {
            headA = headA.next
            headB = headB.next
        }
    }

    return null
};


function __getIntersectionNode(headA, headB) {
    if (headA == null || headB == null) return null;
    let pA = headA, pB = headB;
    while (pA != pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
}

const a1 = new Node('a1')
const a2 = new Node('a2')
const b1 = new Node('b1')
const b2 = new Node('b2')
const b3 = new Node('b3')
const c1 = new Node('c1')
const c2 = new Node('c2')
const c3 = new Node('c3')

a1.next = a2
a2.next = c1

b1.next = b2
b2.next = b3
b3.next = c1

c1.next = c2
c2.next = c3

console.log(getIntersectionNode(a1, b1))
// 可以理解成两个人速度一致， 走过的路程一致。那么肯定会同一个时间点到达终点。
// 如果到达终点的最后一段路两人都走的话，那么这段路上俩人肯定是肩并肩手牵手的。 nb


console.log(__getIntersectionNode(a1, b1))



//  pA a1   a2  c1  c2  c3  b1  b2  b3  c1       
//  PB b1   b2  b3  c1  c2  c3  a1  a2  c1