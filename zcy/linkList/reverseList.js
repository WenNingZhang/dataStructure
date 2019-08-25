
//  https://leetcode.com/submissions/detail/254626186/
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function reverseList(head) {
    let pre = null
    let next = null
    while(head != null) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
}


const node1 = new Node(10)
const node2 = new Node(1)
const node3 = new Node(20)

node1.next = node2
node2.next = node3
node3.next = null

console.log('original list',JSON.stringify(node1, null, 2))
console.log('reverseList result: ', JSON.stringify(reverseList(node1), null, 2))