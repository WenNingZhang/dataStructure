

class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// https://leetcode.com/problems/linked-list-cycle-ii/submissions/
function hasCycle_use_show_faster_pointer(head) {
    if (!head || !head.next || !head.next.next) return null

    let slow = head.next    // 快指针
    let faster = head.next.next  // 慢指针

    while (slow !== faster) {
        // 快指针始终比慢指针跑得快，因此可以只判断快指针即可
        if (faster.next === null || faster.next.next === null) {
            return null
        }
        slow = slow.next
        faster = faster.next.next
    }

    faster = head

    while (faster !== slow) {
        faster = faster.next
        slow = slow.next
    }
    return faster
}


const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
const node6 = new ListNode(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node3

console.log('use containter test list is has cycle: ', hasCycle_use_show_faster_pointer(node1))
