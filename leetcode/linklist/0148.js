/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

 示例 1:

 输入: 4->2->1->3
 输出: 1->2->3->4
 示例 2:

 输入: -1->5->3->4->0
 输出: -1->0->3->4->5
 **/

function Node(val) {
    this.value = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head;
    let faster = head.next;

    while (faster && faster.next) {
        slow = slow.next;
        faster = faster.next.next;
    }

//   走完后，faster 指针走到链表末尾或者 faster 指针走到末尾前一个位置，而
//   show 指针则走到链表的中间位置
    let tmp = slow.next;
    slow.next = null;
    let left = sortList(head);
    let right = sortList(tmp);

    let h = new Node(0);
    let res = h;
    // 下面使用的是归并排序的思想进行操作了
    while (left && right) {
        if (left.value < right.value) {
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;
    }

    // 跳出上面循环后，说明left或者 right 有且仅有一个是 null的。如果 left 是 null
    // 则用 h 把连到right。否则如果right 是null 的话，则把 h 连到left
    h.next = left ? left : right;
    console.log(res);
    return res.next;

};

const node1 = new Node(20);
const node2 = new Node(-1);
const node3 = new Node(16);
const node4 = new Node(5);
const node5 = new Node(9);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


// console.log(JSON.stringify(node1, null, 2))
// const sort = sortList(node1)
console.log(JSON.stringify(sortList(node1), null, 2));
