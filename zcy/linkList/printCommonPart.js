class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function printCommonPart(head1, head2) {
    while(head1 && head2) {
        if (head1.value < head2.value) {
            head1 = head1.next
        }else if (head1.value > head2.value) {
            head2 = head2.next
        }else {
            console.log('===>', head1.value)
            head1 = head1.next
            head2 = head2.next
        }
    }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(9)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = null


const node5 = new Node(2)
const node6 = new Node(4)
const node7 = new Node(9)
const node8 = new Node(10)
node5.next = node6
node6.next = node7
node7.next = node8
node8.next = null

printCommonPart(node1, node5)