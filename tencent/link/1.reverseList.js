class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

function reverse(head) {
    if (!head) return null;
    let cur = head;
    let pre = null;
    while (cur !== null) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

// 1->2->3->4->5->NULL
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(JSON.stringify(node1, null, 2));
console.log(JSON.stringify(reverse(node1), null, 2));
