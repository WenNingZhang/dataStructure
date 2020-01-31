/**
 * class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null)
            return head;
        ListNode fast = head.next, slow = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode tmp = slow.next;
        slow.next = null;
        ListNode left = sortList(head);
        ListNode right = sortList(tmp);
        ListNode h = new ListNode(0);
        ListNode res = h;
        while (left != null && right != null) {
            if (left.value < right.value) {
                h.next = left;
                left = left.next;
            } else {
                h.next = right;
                right = right.next;
            }
            h = h.next;
        }
        h.next = left != null ? left : right;
        return res.next;
    }
}

 使用归并排序的思想进行操作。
 **/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sortList(head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head;
    let faster = head.next;

    while (faster && faster.next) {
        slow = slow.next;
        faster = faster.next.next;
    }

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
}

// 4->2->1->3
let node1 = new Node(4);
let node2 = new Node(2);
let node3 = new Node(1);
let node4 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(JSON.stringify(sortList(node1), null, 2));

