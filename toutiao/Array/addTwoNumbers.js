class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function addTwoNumbers(l1, l2) {
    const head = new Node(0);
    let p = l1;
    let q = l2;
    let curr = head;
    let carry = 0;
    while (p || q) {
        let x = p ? p.value : 0;
        let y = q ? q.value : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new Node(sum % 10);
        curr = curr.next;
        if (p) p = p.next;
        if (q) q = q.next;
    }

    if (carry > 0) {
        curr.next = new Node(carry);
    }
    return head.next;
}


const node1 = new Node(2);
const node2 = new Node(4);
const node3 = new Node(3);


const node4 = new Node(5);
const node5 = new Node(4);
const node6 = new Node(6);

node1.next = node2;
node2.next = node3;

node4.next = node6;
node6.next = node5;

console.log(addTwoNumbers(node1, node4));
