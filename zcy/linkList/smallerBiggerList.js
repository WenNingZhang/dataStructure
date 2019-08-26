class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

function partitionArr(arr, num) {
    let small = -1
    let i = 0
    while (i < arr.length) {
        if (arr[i].val < num) {
            swap(arr, ++small, i++)
        } else {
            i++
        }
    }
}

function smallerEqualBiggerList(head, num) {
    let arr = []
    let cur = head
    while (cur !== null) {
        arr.push(new Node(cur.val))
        cur = cur.next
    }

    partitionArr(arr, num)

    let i = 1
    // 把数组中的node，用链表连接起来
    for (i; i < arr.length; i++) {
        arr[i - 1].next = arr[i]
    }
    arr[i - 1].next = null
    return arr[0]
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
console.log('by partition(分区) :', JSON.stringify(smallerEqualBiggerList(node1, num), null, 2))
