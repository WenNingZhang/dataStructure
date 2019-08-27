function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


function copyRandomList_use(head) {
    if (!head) return null
    let cur = head
    let next = null
    //    copy node
    while (cur) {
        next = cur.next
        cur.next = new Node(cur.val)
        cur.next.next = next
        cur = next
    }
    // console.log('######', JSON.stringify(head, null, 2))
    cur = head
    let copyNode = null
    //    setting copy node random point 
    while (cur) {
        next = cur.next.next
        copyNode = cur.next
        copyNode.random = cur.random ? cur.random.next : null
        cur = next
    }

    //   把 copy 节点和 当前节点分割
    let res = head.next
    cur = head
    while (cur) {
        next = cur.next.next
        copyNode = cur.next
        cur.next = next
        copyNode.next = next ? next.next : null
        cur = next
    }
    return head
}


const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

node1.next = node2
node2.next = null
node3.next = null

node1.random = node2
node2.random = node2


console.log('copy after list is : ', copyRandomList_use(node1))
console.log('origin list:', node1)