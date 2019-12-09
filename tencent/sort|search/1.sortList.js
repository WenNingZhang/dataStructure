/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

 示例 1:

 输入: 4->2->1->3
 输出: 1->2->3->4
 示例 2:

 输入: -1->5->3->4->0
 输出: -1->0->3->4->5
 **/


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


function sortList (head){
    if (!head || !head.next) {
        return head
    }

    let slow = head
    let faster = head.next
    while(faster && faster.next) {
        slow = slow.next
        faster = faster.next.next
    }
    // 走完后，faster指针走到链表末尾或者faster指针走到末尾的前一个位置。
    // 而slow 指针则走到链表的中间位置
    let tmp = slow.next
    slow.next = null    // 为了在排序过程中把链表分开来
    let left = sortList(head)
    let right = sortList(tmp)
    let h = new Node(0)
    let rest = h
    rest.next = merge(left, right)
    return rest.next
}

function merge(left, right) {
    let h = new Node(0)
    let res = h
    while(left && right) {
        if (left.value < right.value) {
            h.next = left
            h = h.next
            left = left.next
        } else {
            h.next = right
            h = h.next
            right = right.next
        }
    }
    //  这里面 left 和 right 只有其中一个是 null
    h.next = left ? left : right
    return res.next
}

/**
 * 上面都错了，这个空间复杂度是 O(logN)。是因为每次操作都要把 left 和right 记住。
 * 这些变量的存储是 O(logN)。因此空间复杂度是O(logN)。和申请节点的空间无关啊
 */
let node1 = new Node(20);
let node2 = new Node(1);
let node3 = new Node(2);
let node4 = new Node(-1);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(JSON.stringify(sortList(node1), null, 2));

function __sortList(head) {
    if (!head || !head.next) {
        return head
    }
    let [tmp, count] = [ head, 0]
    while(tmp) {
        tmp = tmp.next
        count++
    }
    let res = new ListNode(0)
    res.next = head

    for(let i = 1; i <= count;i = i*2) {
        let prev = res
        let curr = res.next
        while(curr) {
            let left = curr
            let right = __cut(left, i)
            curr = __cut(right, i)

            prev.next = __merge(left, right)
            while(prev.next) {
                prev = prev.next
            }
        }
    }
    return res.next
}

function __cut(head, size) {
    let curr = head
    while(--size && curr) {
        curr = curr.next
    }
    if (!curr) return null
    let next = curr.next
    curr.next = null
    return next
}

function __merge(n1, n2) {
    let res = new ListNode(0)
    let prev = res
    while(n1 && n2) {
        if (n1.value < n2.value) {
            prev.next = n1
            n1 = n1.next
            prev = prev.next
        }else {
            prev.next = n2
            n2 = n2.next
            prev = prev.next
        }
    }
    prev.next = n1 ? n1 : n2
    return res.next
}

console.log(JSON.stringify(__sortList(node1), null, 2));