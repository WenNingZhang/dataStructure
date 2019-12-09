/**
 * 旋转链表
 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

 示例 1:

 输入: 1->2->3->4->5->NULL, k = 2
 输出: 4->5->1->2->3->NULL
 解释:
 向右旋转 1 步: 5->1->2->3->4->NULL
 向右旋转 2 步: 4->5->1->2->3->NULL
 示例 2:

 输入: 0->1->2->NULL, k = 4
 输出: 2->0->1->NULL
 解释:
 向右旋转 1 步: 2->0->1->NULL
 向右旋转 2 步: 1->2->0->NULL
 向右旋转 3 步: 0->1->2->NULL
 向右旋转 4 步: 2->0->1->NULL
 **/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/*
 链表中的点已经相连，一次旋转操作意味着。
 1、现将链表搞成环，然后在确定的地方断开环，然后确定相应的头尾节点
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return null;
    let cur1 = head;
    let cur = head;
    let len = 0;
    let pre = null;
    while (cur) {
        len++;
        pre = cur;
        cur = cur.next;
    }
    pre.next = head;
    k = k % len;

    let move = len - k;
    let moveLen = 0;
    let newHead = null;

    while (cur1) {
        moveLen++;
        if (moveLen === move) {
            newHead = cur1.next;
            cur1.next = null;
            break;
        } else {
            cur1 = cur1.next;
        }
    }
    return newHead;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


console.log(JSON.stringify(rotateRight(node1, 2), null, 2));


// 1->2->3->4->5->NULL, k = 2

// 5->1-2-3-4->null  k = 1    4
// 4 5  1 2 3 -> null  k = 2  3
// 3 4  5 1 2 -> null  k = 3  2
// 2 3  4 5 1 -> null k = 4   1


