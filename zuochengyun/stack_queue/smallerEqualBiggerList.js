class Node {
    constructor(value)  {
        this.value = value
        this.next = null
    }
}

function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

function partition(arr, num) {
    let small = -1
    let big = arr.length 
    let i = 0
    
    while( i < big ) {
        if (arr[i].value < num) {
            swap(arr, ++small, i++,)
        }else if (arr[i].value > num) {
            swap(arr, --big, i)
        } else {
            i++
        }
    }
}

function smallerEqualBiggerList (head, num) {
    let arr = []
    let cur = head
    while(cur.next !== null) {
        arr.push(new Node(cur.value))
        cur = cur.next
    }

    partition(arr, num)

    let i = 1
    // 把数组中的node，用链表连接起来
    for(i; i < arr.length; i++) {
        arr[i-1].next = arr[i]
    }
    arr[i -1].next =  null
    return arr[0]
}

const node1 = new Node(10)
const node2 = new Node(4)
const node3 = new Node(20)
const node4 = new Node(8)
const node5 = new Node(10)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const num = 10

console.log('by partition(分区) :', JSON.stringify(smallerEqualBiggerList(node1, num), null ,2))