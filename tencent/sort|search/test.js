// 相当于split 操作，即断链操作，不过我觉的使用 cut 更准确些，将链表 head 切掉前 size 个节点，并返回
// 后半部分的链表头部




// function cut(head, size) {
//     let curr = head
//     while(--size && curr) {
//         curr = curr.next
//     }
//     if (!curr) return null
//     let next = curr.next
//     curr.next = null
//     return next
// }

// 相当于split操作，即断链操作，不过我觉的使用 cut 更准确些，将链表的 head 切掉size 个节点，
// 并返回后半部分的链表头
// function cut(head, size) {
//     let curr = head
//     while(--size && curr) {
//         curr = curr.next
//     }
//     if (!curr) return null
//     let next = curr.next
//     curr.next = null
//     return next
// }


// class ListNode {
//     constructor(value) {
//         this.value  = value
//         this.next = null
//     }
// }

// function __sortList(head) {
//     if (!head || !head.next) {
//         return head
//     }
//     let [tmp, count] = [ head, 0]
//     while(tmp) {
//         tmp = tmp.next
//         count++
//     }
//     let res = new ListNode(0)
//     res.next = head

//     for(let i = 1; i <= count;i = i*2) {
//         let prev = res
//         let curr = res.next
//         while(curr) {
//             let left = curr
//             let right = cut(left, i)
//             curr = cut(right, i)

//             prev.next = merge(left, right)
//             while(prev.next) {
//                 prev = prev.next
//             }
//         }
//     }
//     return res.next
// }

// function cut(head, size) {
//     let curr = head
//     while(--size && curr) {
//         curr = curr.next
//     }
//     if (!curr) return null
//     let next = curr.next
//     curr.next = null
//     return next
// }

// function merge(n1, n2) {
//     let res = new ListNode(0)
//     let prev = res
//     while(n1 && n2) {
//         if (n1.value < n2.value) {
//             prev.next = n1
//             n1 = n1.next
//             prev = prev.next
//         }else {
//             prev.next = n2
//             n2 = n2.next
//             prev = prev.next
//         }
//     }
//     prev.next = n1 ? n1 : n2
//     return res.next
// }

// let node1 = new ListNode(5);
// let node2 = new ListNode(1);
// let node3 = new ListNode(2);
// let node4 = new ListNode(10);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// console.log(JSON.stringify(__sortList(node1), null, 2));

/**
 * 搜索旋转排序数组| 搜索旋转排序数组 | 搜索旋转排序数组
 * 比如 1 2 3 4 5
 *     5 1 2 3 4  第一种情况
 *     2 3 4 5 1  第二中情况
 */

//  function search(nums, target) {

//     let start = 0
//     let end = nums.length - 1

//     while(start <= end) {
//         let mid = parseInt((start + end)/2)
//         if (nums[start] === nums[mid]) {
//             return mid
//         } else if (nums[start] < nums[mid]) {
//             if (target >= nums[start] && target < nums[mid]) {
//                 end = mid-1
//             } else {
//                 start = mid+1
//             }
//         } else if (nums[start] > nums[mid]) {
//             if (target > nums[mid] && target <= nums[end]) {
//                 start = mid +1
//             }else {
//                 end = mid-1
//             }
//         }
//     }
//     return -1
//  }
//  const a = [5,1,3];
//  console.log(search(a, 3));


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  */
// var kthSmallest = function(root, list) {

// };

// let list = []
// function inOrderRecur(head) {
//     if (!head) {
//         return null
//     }
//     inOrderRecur(head.left)
//     list.push(head.value)
//     inOrderRecur(head.right)
//     return list
// }



var kthSmallest = function(root, k) {
    let list = []
    function inOrderRecur(head) {
        if (!head) {
            return null
        }
        inOrderRecur(head.left)
        list.push(head.val)
        inOrderRecur(head.right)
        return list
    }
    inOrderRecur(root)
    return list[k-1]
};

let head = new Node(5);
head.left = new Node(3);
head.right = new Node(8);
head.left.left = new Node(2);
head.left.right = new Node(4);
head.left.left.left = new Node(1);
head.right.left = new Node(7);
head.right.left.left = new Node(6);
head.right.right = new Node(10);
head.right.right.left = new Node(9);
head.right.right.right = new Node(11);

let value = kthSmallest(head, 2)
console.log(value)