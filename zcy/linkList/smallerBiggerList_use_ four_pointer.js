
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function smallerBiggerList_use_four_pointer(head, num) {
    if (!head) return null

    let sh = null   // 小于区的头节点
    let st = null   // 小于区的尾节点

    let beh = null  // 大于等于区头节点
    let bet = null  // 大于等于区尾节点
    
    let next = null // 下一个节点
    let cur = head
    while(cur !== null) {
        next = cur.next

        cur.next = null
        if (cur.value < num) {
            if (sh === null) {
                sh = cur
                st = cur
            } else {
                st.next = cur
                st = cur
            }
        } else {
            if (beh === null) {
                beh = cur
                bet = cur
            } else {
                bet.next = cur
                bet = cur
            }
        } 
        cur = next
    }

    // 连接小于区的尾部、等于区的头部、尾部、大于区的头部、尾部
    // 把小于区的头和 大于等于区的为
    if (st !== null) {
        st.next = beh
    }

    return sh !== null ? sh : beh
}

const node1 = new Node(1)
const node2 = new Node(4)
const node3 = new Node(3)
const node4 = new Node(2)
const node5 = new Node(5)
const node6 = new Node(2)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = null

const num = 3

console.log('by siz-pointer join :', JSON.stringify(smallerBiggerList_use_four_pointer(node1, num), null ,2))
