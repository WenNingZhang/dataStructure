 class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
 }

 function hasCycle(head) {
    let set = new Set()
    let mark = false
    while(head) {
        if (!set.has(head)) {
            set.add(head)
        }else {
            mark = true
            break
        }
        head = head.next
    }
    console.log('====>', set)
    return mark
 }

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(2)
const node4 = new ListNode(4)
const node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

console.log('--->', hasCycle(node1))

