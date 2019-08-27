function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


function copyRandomList_use_containter(head) {
    if (!head) return null
    const map = new Map();
    let cur = head
    while (cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }

    cur = head
    while (cur) {
        map.get(cur).next = cur.next ? map.get(cur.next) : null 
        map.get(cur).random = cur.random ? map.get(cur.random) : null
        cur = cur.next
    }

    return map.get(head)
}


const node1 = new Node(1)
const node2 = new Node(2)
// const node3 = new Node(3)

node1.next = node2
node2.next = null
// node3.next = null

node1.random = node2
node2.random = node2

console.log('origin list:', node1)
console.log('copy after list is : ', copyRandomList_use_containter(node1))