/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

 示例：

 输入：1->2->4, 1->3->4
 输出：1->1->2->3->4->4
 **/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class Node {
    constructor(val = 0, next = null) {
        this.value = val;
        this.next = next;
    }
}
var mergeTwoLists = function(l1, l2) {
    let head = new Node()
    const res = head    // res 指向新创建链表的头部
    let cur1 = l1
    let cur2 = l2
    while (cur1 && cur2) {
       if (cur1.value < cur2.value) {
           head.next = new Node(cur1.value)
           cur1 = cur1.next
       }else {
           head.next = new Node(cur2.value)
           cur2 = cur2.next
       }
       head = head.next
    }
    while(cur1) {
        head.next = new Node(cur1.value)
        head = head.next
        cur1 = cur1.next
    }

    while (cur2) {
        head.next = new  Node(cur2.value)
        head = head.next
        cur2 = cur2.next
    }
    return res.next
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(4);

node1.next = node2;
node2.next = node3;


const node4 = new Node(1);
const node5 = new Node(3);
const node6 = new Node(4);

node4.next = node5;
node5.next = node6;

console.log(JSON.stringify(mergeTwoLists(node1, node4), null, 2))
