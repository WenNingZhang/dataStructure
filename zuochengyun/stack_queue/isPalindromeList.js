class Stack{
	constructor(length) {
		this.arr = []
		this.next = 0	// 1、表示栈大小	2、表示下一个入栈的数放的位置
	}

	peek() {
		if (this.next === 0) {
			return null
		}
		return this.arr[this.next-1]
	}

	push(value) {
		this.arr[this.next++] = value
	}

	pop() {
		if (this.next === 0) {
			console.error('栈空，无法弹出')
			return
		}
		return this.arr[--this.next]
	}
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


function isPalindrome1(head) {
    let cur = head
    const stack = new Stack()
    // 把链表中的数据入栈
    while(cur) {
        stack.push(cur)
        cur = cur.next
    }
    // 栈出栈和链表进行比较。
    while(head) {
        if (head.value !== stack.pop().value) {
            return false
        }
        head = head.next
    }
    return true
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
	// n2 -> right part first node
	n2 = n1.next
	n1.next = null
	let n3 = null
	while(n2 !== null) {
		n3 = n2.next	// n3 -> save next node
		n2.next = n1	// next of right node covert 
		n1 = n2		// n1 move 
		n2 = n3		// n2 move 
	}

	n3 = n1		// n3==> save last node
	n2 = head	// n2==> left first node

	let res = true
	while(n1 !== null && n2 !== null) {
		if (n1.value !== n2.value) {
			return false
		}
		n1 = n1.next
		n2 = n2.next
	}
	
	//  recover list
// 		   n2	n1	n3
	//  <- 4 <-5 <- 6
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


// console.log(node1)
console.log('by container(stack) decide palindrome is :', isPalindrome1(node1))

console.log('by faster and slower pointer  decide palindrome is :', isPalindrome2(node1))