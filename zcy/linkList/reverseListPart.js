class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function reverserListPart(head, from ,to) {
    let len = 0
    let node1 = head
    let fPre = null
    let tPos = null
    while(node1 !== null) {
        len++
        fPre = len === from - 1 ? node1 : fPre
        tPos = len === to + 1 ? node1 : tPos
        node1 = node1.next
    }

    node1 = fPre === null ? head : fPre.next
    let node2 = node1.next
    node1.next = tPos
    let next = null
    while(node2 !== tPos) {
        next = node2.next
        node2.next = node1
        node1 = node2
        node2 = next
    }

    if (fPre !== null) {
        fPre.next = node1
        return head
    }
    // tPre 等于 null。 说明头节点已经发生变化，因此需要返回 tPos 的前一个节点。为 node1
    return node1
}


const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null

console.log('original list',JSON.stringify(node1, null, 2))
// from 2 to 4
console.log('reverseList result: ', JSON.stringify(reverserListPart(node1, 2, 4), null, 2))
