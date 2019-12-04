class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
// 0->1->2->3->4->5->6->7->8->9->10
// 10->9->8->7->6->5->4->3->2->1->0
// 8->9->10->5->6->7->2->3->4->1->0
// 0->1->4->3->2->7->6->5->10->9->8

function reverserListPart(head, from ,to) {
    let len = 0
    let node1 = head
    let fPre = null // from 节点的前一个
    let tPos = null // to 节点的后一个
    while(node1 !== null) {
        len++
        fPre = len === from - 1 ? node1 : fPre
        tPos = len === to + 1 ? node1 : tPos
        node1 = node1.next
    }

    // 走完后, tPre 和 tPos 都已经记录下from 节点的前一个位置和 to 节点的后一个位置了。
    node1 = fPre === null ? head : fPre.next    // 需要反转的节点
    let node2 = node1.next                      // 当前需要反转节点的下一个节点
    node1.next = tPos
    let next = null
    while(node2 !== tPos) {                     // 当前需要反转节点的下一个节点 !== 总共需要反转节点的下一个节点。
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
