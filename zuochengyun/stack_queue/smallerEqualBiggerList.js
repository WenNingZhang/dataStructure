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
            swap(arr, ++small, i++)
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
    while(cur !== null) {
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

function smallerEqualBiggerList_use_six_pointer(head, num) {
    let sh = null
    let st = null
    let eh = null
    let et = null
    let bh = null
    let bt = null
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
        } else if (cur.value === num) {
            if (eh === null) {
                eh = cur
                et = cur
            } else {
                et.next = cur
                et = cur
            }
        }else {
            if (bh === null) {
                bh = cur
                bt = cur
            } else {
                bt.next = cur
                bt = cur
            }
        }

        cur = next
    }

    // 连接小于区的头部、尾部、等于区的头部、尾部、大于区的头部、尾部
    if (st !== null) {
        st.next = eh
        et = et === null ? st : et
    }

    // all reconnect
    if (et !== null) {
        et.next = bh
    }

    return sh !== null ? sh : eh !== null ? eh : bh
}

const node1 = new Node(10)
const node2 = new Node(4)
const node3 = new Node(12)
const node4 = new Node(8)
const node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const num = 8
console.log('by partition(分区) :', JSON.stringify(smallerEqualBiggerList(node1, num), null ,2))


console.log('by siz-pointer join :', JSON.stringify(smallerEqualBiggerList_use_six_pointer(node1, num), null ,2))

