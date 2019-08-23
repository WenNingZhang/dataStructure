class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// 判断

//    	 n1	n2 n3   	
// 1->2->3->4->5->6
// 		 |
// 		null	
// show 一次走一步;fast 指针一次走两步。当快指针走到链表结尾时(偶数时)，慢指针指向中间指针的前一个位置
// 其实可以不用关快指针是否已经走到链表尾部
function isPalindrome2(head) {
	if (!head || !head.next) {
		return true	// 空字符串默认是回文字符串
	}
	let n1 = head 
	let n2 = head

	// find mid node
	while(n1.next !== null && n2.next !== null && n2.next.next !== null) {
		n1 = n1.next
		n2 = n2.next.next
    }

    // 改变右半部分链表的指向
    n2 = n1.next
    n1.next = null
    let n3 = null
    while(n2 !== null) {
        n3 = n2.next
        n2.next = n1
        n1 = n2
        n2 = n3
    }

    n3 = n1	    // n1 是链表维度，用 n3 记住 n1 位置
    n2 = head
    let res = true
    while(n1 !== null && n2 !== null) {
        if (n1.value !== n2.value) {
            return false
        }
        n1 = n1.next
        n2 = n2.next
    }

    //  以下代码为调整链表的结构，把后半部分的指针列表
	n1 = n3.next
	n3.next = null

	while(n1 !== null) {
		n2 = n1.next
		n1.next = n3
		n3 = n1
		n1 = n2
	}

	return res
}


const node1 = new Node(10)
const node2 = new Node(1)
const node3 = new Node(20)
const node4 = new Node(1)
const node5 = new Node(10)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

console.log(JSON.stringify(node1, null, 2))
console.log('by faster and slower pointer  decide palindrome is :', isPalindrome2(node1))
console.log(JSON.stringify(node1, null, 2))