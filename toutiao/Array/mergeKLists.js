/**
 * heapify 化
 * @param {*} arr
 * @param {*} i heapify 的位置
 * @param {*} heapSize 1、堆大小 2、堆中新加的值放的地方
 */
function heapify(arr, i, heapSize) {
    let lc = i * 2 + 1;
    while (lc < heapSize) {
        let rc = lc + 1;
        let smallest = rc < heapSize && arr[rc].value < arr[lc].value ? rc : lc;
        smallest = arr[smallest].value < arr[i].value ? smallest : i;
        if (smallest === i) {
            break;
        }
        swap(arr, i, smallest);
        i = smallest;
        lc = i * 2 + 1;
    }
}


// 交换函数
function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}

// 构建小根堆过程
function heapInsert(arr, index) {
    while (arr[index].value < arr[parseInt((index - 1) / 2)].value) {
        swap(arr, index, parseInt((index - 1) / 2));
        index = Math.floor((index - 1) / 2);
    }
}

// 构建小根堆
class MinHeap {
    constructor() {
        this.heap = [];
        this.heapSize = 0;
    }

    push(value) {
        this.heap.push(value);
        heapInsert(this.heap, this.heapSize++);
    }

    pop() {
        const value = this.heap[0];
        this.heap[0] = this.heap[this.heapSize - 1];
        this.heap.pop();
        heapify(this.heap, 0, --this.heapSize);
        return value;
    }

    isEmpty() {
        return this.heapSize === 0;
    }

    size() {
        return this.heapSize;
    }

    peek() {
        return this.heap[0];
    }
}


/**
 * class Solution(object):
 def mergeKLists(self, lists):
 """
 :type lists: List[ListNode]
 :rtype: ListNode
 """
 self.nodes = []
 head = point = ListNode(0)
 for l in lists:
 while l:
 self.nodes.append(l.val)
 l = l.next
 for x in sorted(self.nodes):
 point.next = ListNode(x)
 point = point.next
 return head.next
 **/

/**
 * 输入:
 [
 1->4->5,
 1->3->4,
 2->6
 ]
 输出: 1->1->2->3->4->4->5->6

 使用堆思想，开始遍历数组，把数组的各个头节点放入堆中，

 然后依次遍历堆。小根堆
 获取获取堆顶元素，也就是最小元素，1。通过1 构建节点，然后判断1后面是否有cur.next节点，如果有。
 则把后序next 节点放入 栈中。否则不放。





 1-> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6


 堆中元素 6


 **/

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

const minHeap = new MinHeap();

function mergeKLists(list) {
    let point = new Node(0, null);
    const res = point;

    // 合并 k 个单链表，先把各个单链表的头部放入小根堆中，然后依次从堆中取出。
    for (let i = 0; i < list.length; i++) {
        const head = list[i];
        minHeap.push({value: head.value, node: head});
    }

    while (!minHeap.isEmpty()) {
        let {value, node} = minHeap.pop();
        // point 节点指向当前需要连接的节点。因此会有 point = point.next
        point.next = new Node(value);
        point = point.next;
        if (node.next) {
            minHeap.push({value: node.next.value, node: node.next});
        }
    }
    return res.next;
}

const node1 = new Node(1);
const node2 = new Node(1);
const node3 = new Node(2);
const node4 = new Node(3);
const node5 = new Node(4);
const node6 = new Node(4);
const node7 = new Node(5);
const node8 = new Node(6);
node1.next = node5;
node5.next = node7;

node2.next = node4;
node4.next = node6;


node3.next = node8;


const list = [
    node1, node2, node3
];
console.log(JSON.stringify(mergeKLists(list), null, 2));

