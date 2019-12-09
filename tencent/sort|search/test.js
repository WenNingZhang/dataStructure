// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
//
// /**
//  * 使用归并排序的思想进行
//  * @param head
//  * @returns {*}
//  */
// function sortList(head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     let slow = head;
//     let faster = head.next;
//     while (faster && faster.next) {
//         slow = slow.next;
//         faster = faster.next.next;
//     }
//
// //   这个时候慢指针在链表的中间位置
//     let tmp = slow.next;
//     slow.next = null;
//     let left = sortList(head);
//     let right = sortList(tmp);
//
//     //
//     let h = new Node(0);
//
//     let res = h;
//     while (left && right) {
//         if (left.value < right.value) {
//             h.next = left;
//             left = left.next;
//         } else {
//             h.next = right;
//             right = right.next;
//         }
//         h = h.next;
//     }
// //   这个时候 h 走到两个排序链表的排好序的最后一个节点
//     h.next = left ? left : right;
//
//     return res.next;
// }
//
//
// let node1 = new Node(5);
// let node2 = new Node(1);
// let node3 = new Node(2);
// let node4 = new Node(10);
//
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
//
// // console.log(JSON.stringify(sortList(node1), null, 2));
//
//
// // 1. 计算它的空间复杂度是多少？
//
// /**
//  * O(logN)
//  * 因为每次调用时都是把链表一分为二。空间复杂度相当于链表的深度，因此它的空间复杂度是O(LogN)
//  * 题目要求时间空间复杂度分别为O(nlogn)O(nlogn)和O(1)O(1)，根据时间复杂度我们自然想到二分法，从而联想到归并排序；
//
//  对数组做归并排序的空间复杂度为 O(n)O(n)，分别由新开辟数组O(n)O(n)和递归函数调用O(logn)O(logn)组成，而根据链表特性：
//
//  数组额外空间：链表可以通过修改引用来更改节点顺序，无需像数组一样开辟额外空间；
//  递归额外空间：递归调用函数将带来O(logn)O(logn)的空间复杂度，因此若希望达到O(1)O(1)空间复杂度，则不能使用递归。
//  通过递归实现链表归并排序，有以下两个环节：
//
//  */
//
// // 2、时间复杂度是 O(NlogN)
// function __sortList(head) {
//     let h = head;
//     let length = 0;
//     let intv = 1;
//     while (h) {
//         h = h.next;
//         length++;
//     }
//     let res = new Node(0);
//     res.next = head;
//     console.log(intv, length)
// //    merge the list in different intv
//     while (intv < length) {
//         let pre = res;
//         let h = res.next;
//         console.log('==>', pre, h)
//         while (h) {
//             //    get the two merge head h1 h2
//             let h1 = h;
//             let i = intv;
//             while (i && h) {
//                 h = h.next;
//                 i = i - 1;
//             }
//             if (i) {
//                 break;   // no need to merge because the h2 is node
//             }
//             let h2 = h;
//             i = intv;
//             while (i && h) {
//                 h = h.next;
//                 i = i - 1;
//             }
//             let c1 = intv;
//             let c2 = intv - i;
//
//
//             //    merge the h1 and h2
//             while (c1 && c2) {
//                 if (h1.value < h2.value) {
//                     pre.next = h1;
//                     h1 = h1.next;
//                     c1 = c1 - 1;
//                 } else {
//                     pre.next = h2;
//                     h2 = h2.next;
//                     c2 = c2 - 1;
//                 }
//                 pre = pre.next;
//             }
//             pre.next = c1 ? h1 : h2;
//             while (c1 > 0 || c2 > 0) {
//                 pre = pre.next;
//                 c1 = c1 - 1;
//                 c2 = c2 - 1;
//             }
//             pre.next = h;
//         }
//         intv = intv * 2;
//     }
//     return res.next;
// }
//
//
//
// console.log(JSON.stringify(__sortList(node1), null, 2));


// 使用 partition 思想找到第 k 大的数值。
// function swap(arr, i, j) {
//     let tmp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = tmp;
// }

// /**
//  * 使用 partition 思想操作
//  * @param arr
//  * @param begin
//  * @param end
//  * @returns {{left: number, right: *}}
//  */
// function partition(arr, begin, end) {
//     let small = begin - 1;
//     let big = end;
//     let cur = begin;
//     while (cur < big) {
//         if (arr[cur] < arr[end]) {
//             swap(arr, ++small, cur++);
//         } else if (arr[cur] > arr[end]) {
//             swap(arr, cur, --big);
//         } else {
//             cur++;
//         }
//     }
//     swap(arr, big, end);
//     // 在这个分区中
//     return {
//         left: small + 1,
//         right: big
//     };
// }

// /**
//  * 在一个未排序的数组中找到第 k 大的数值。使用 bfprt 算法计算即可
//  * @param arr
//  * @param begin
//  * @param end
//  * @param i
//  */
// function topK(arr, begin, end, i) {
//     if (begin >= end) {
//         return -1;
//     }
//     const {left, right} = partition(arr, begin, end);
//     if (i >= left && i <= right) {
//         return arr[i];
//     } else if (i < left) {
//         return topK(arr, begin, left - 1, i);
//     } else if (i > right) {
//         return topK(arr, right + 1, end, i);
//     }
// }


// const nums = [3,2,1,5,6,4]
// // sorted : { 1,2,3,4,5,6}      第 1 大 是 6   第 6 小的树是 6
// //                              第 2 大 是 5   第 5 小的树是 5
// const k = 2;

// // let a = nums.length + 1 - k
// console.log(nums.length - k)
// const kValue = topK(nums, 0, nums.length - 1, 4);
// console.log('use partition :', kValue);
// // console.log(nums);

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// /**
//  * 使用递归排序思想就行排序
//  */

//  function sortList(head) {
//      if (!head || !head.next) {
//          return head
//      }
//      let slow = head
//      let faster = head.next
//     //  通过快慢指针的方式找到整条链表的中间位置
//      while(faster && false.next) {
//          slow = slow.next
//          faster = faster.next.next
//      }
//     // 这个时候慢指针正好在链表的中间位置
//     let tmp = slow.next
//     slow.next = null
//     let left = sortList(head)
//     let right = sortList(tmp)

//     let h = new Node(0)
//     let res = h

//     while(left && right) {
//         if (left.value < right.value) {
//             h.next = left
//             h = h.next 
//             left = left.next
//         }else {
//             h.next = right
//             right = right.next
//             h = h.next
//         }
//     }

//     h.next = left ? left : right
//     return res.next
//  }

//  let node1 = new Node(5);
// let node2 = new Node(1);
// let node3 = new Node(2);
// let node4 = new Node(10);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// console.log(JSON.stringify(sortList(node1), null, 2));

// 链表排序sortList

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }


// function sortList (head){
//     if (!head || !head.next) {
//         return head
//     }

//     let slow = head
//     let faster = head.next
//     while(faster && faster.next) {
//         slow = slow.next
//         faster = faster.next.next
//     }
//     // 走完后，faster指针走到链表末尾或者faster指针走到末尾的前一个位置。
//     // 而slow 指针则走到链表的中间位置
//     let tmp = slow.next
//     slow.next = null    // 为了在排序过程中把链表分开来
//     let left = sortList(head)
//     let right = sortList(tmp)
//     let h = new Node(0)
//     let rest = h
//     merge(left, right, h)
//     return rest.next
// }

// function merge(left, right, h) {
//     while(left && right) {
//         if (left.value < right.value) {
//             h.next = left
//             h = h.next
//             left = left.next
//         } else {
//             h.next = right
//             h = h.next
//             right = right.next
//         }
//     }
//     //  这里面 left 和 right 只有其中一个是 null
//     h.next = left ? left : right
// }

// /**
//  * 因为每次需要把链表一分为二，空间复杂度相当于链表的深度。因此空间复杂度是O(logN)
//  */
// let node1 = new Node(20);
// let node2 = new Node(1);
// let node3 = new Node(2);
// let node4 = new Node(-1);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// console.log(JSON.stringify(sortList(node1), null, 2));

// class ListNode {
//     constructor(val, next = null) {
//         this.val = val
//         this.next = next
//     }
// }
// var sortList = function(head) {
//     if (!head || !head.next) return head;
//     let [tmp, count] = [head, 0];
//     while (tmp) [tmp, count] = [tmp.next, count+1];
    
//     let res = new ListNode(null);
//     res.next = head;
//     for (let i=1; i<count; i*=2) {
//         let [prev, curr] = [res, res.next];
//         while (curr) {
//             let n1 = curr;
//             let n2 = cut(n1, i);
//             curr = cut(n2, i);
            
//             prev.next = merge(n1, n2);
//             while (prev.next) prev = prev.next;
//         }
//     }
//     return res.next;
// };

// // 相当于 split 操作。即断链操作，不过我感觉使用 cut 更准确些，将链表 head
// // 切掉前 size 个节点，并返回后半部分的链表头
// function cut (head, size) {
//     let curr = head;
//     while (--size && curr) curr = curr.next;
//     if (!curr) return null;
//     let next = curr.next;
//     curr.next = null;
//     return next;
// }

// function merge (n1, n2) {
//     let res = new ListNode(null);
//     let prev = res;
//     while (n1 && n2) {
//         if (n1.val < n2.val) [prev.next, n1] = [n1, n1.next];
//         else [prev.next, n2] = [n2, n2.next];
//         prev = prev.next;
//     }
//     prev.next = n1 ? n1 : n2;
//     return res.next;
// }




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