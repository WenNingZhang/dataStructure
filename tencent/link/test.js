// class Node {
//     constructor(value=0, next = null) {
//         this.value = value
//         this.next = next
//     }
// }
//
// function addTwoNumbers(l1, l2) {
//     let cul1 = l1
//     let cur2 = l2
//
//     let head = new Node()
//     const res = head
//     let carry = 0
//     while (cul1 || cur2) {
//         let x = cul1 ? cul1.value : 0
//         let y = cur2 ? cur2.value : 0
//         const sum = x + y + carry
//         carry = parseInt(sum / 10)
//         head.next = new Node(sum % 10)
//         head = head.next
//         if (cul1) cul1 = cul1.next
//         if (cur2) cur2 = cur2.next
//     }
//     return res.next
// }
//
// const node1 = new Node(2);
// const node2 = new Node(4);
// const node3 = new Node(3);
//
// node1.next = node2;
// node2.next = node3;
//
//
// const node4 = new Node(5);
// const node5 = new Node(6);
// const node6 = new Node(4);
//
// node4.next = node5;
// node5.next = node6;
//
// console.log(addTwoNumbers(node1, node4))


// function heapify(arr, i, heapSize) {
//     let lc = i * 2 + 1;
//     while (lc < heapSize) {
//         let rc = lc + 1;
//         let smallest = rc < heapSize && arr[rc].value < arr[lc].value ? rc : lc;
//         smallest = arr[smallest].value < arr[i].value ? smallest : i;
//         if (smallest === i) {
//             break;
//         }
//         swap(arr, i, smallest);
//         i = smallest;
//         lc = i * 2 + 1;
//     }
// }
//
//
// // 交换函数
// function swap(arr, i, j) {
//     let tem = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tem;
// }
//
// // 构建小根堆过程
// function heapInsert(arr, index) {
//     while (arr[index].value < arr[parseInt((index - 1) / 2)].value) {
//         swap(arr, index, parseInt((index - 1) / 2));
//         index = Math.floor((index - 1) / 2);
//     }
// }
//
// // 构建小根堆
// class MinHeap {
//     constructor() {
//         this.heap = [];
//         this.heapSize = 0;
//     }
//
//     push(value) {
//         this.heap.push(value);
//         heapInsert(this.heap, this.heapSize++);
//     }
//
//     pop() {
//         const value = this.heap[0];
//         this.heap[0] = this.heap[this.heapSize - 1];
//         this.heap.pop();
//         heapify(this.heap, 0, --this.heapSize);
//         return value;
//     }
//
//     isEmpty() {
//         return this.heapSize === 0;
//     }
//
//     size() {
//         return this.heapSize;
//     }
//
//     peek() {
//         return this.heap[0];
//     }
// }
//
//
// // 构建小根堆，小根堆中存放的是node节点
//
// class Node {
//     constructor(value = 0, next) {
//         this.value = value
//         this.next = null
//     }
// }
//
// function mergeKlist(lists) {
//     const minHeap = new MinHeap()
//     let node_ = new Node()
//     const res = node_
//
//     for(let i = 0; i < lists.length; i++) {
//         const head = lists[i]
//         minHeap.push({value : head.value, node: head})
//     }
//     while (!minHeap.isEmpty()) {
//         let { value, node } = minHeap.pop()
//         node_.next = new Node(value)
//         node_ = node_.next
//         if (node.next) {
//             minHeap.push({value : node.next.value, node: node.next})
//         }
//     }
//     return res.next
// }
//
// const node1 = new Node(1);
// const node2 = new Node(1);
// const node3 = new Node(2);
// const node4 = new Node(3);
// const node5 = new Node(4);
// const node6 = new Node(4);
// const node7 = new Node(5);
// const node8 = new Node(6);
// node1.next = node5;
// node5.next = node7;
//
// node2.next = node4;
// node4.next = node6;
//
//
// node3.next = node8;
//
//
// const list = [
//     node1, node2, node3
// ];
// console.log(JSON.stringify(mergeKlist(list), null, 2));


//其实移除的该节点的下一个节点。妙哉。。。。
function deleteNode(node) {
    node.value = node.next.value
    node.next = node.next.next
}
