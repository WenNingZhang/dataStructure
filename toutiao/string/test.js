// var reverseWords = function(str) {
//     return str.trim().split(' ').filter(e => !!e).reverse().join(' ')
// }
//
// let str = "a good   example"
//
// console.log(reverseWords(str))

// var simplifyPath = function(path) {
//     const paths = path.split('/');
//     const result = [];
//     for (let i = 0; i < paths.length; i++) {
//         if (paths[i] === '..') {
//             result.pop();   // 从队尾出栈
//         } else if (paths[i] === '' || paths[i] === '.') {
//             continue;
//         } else {
//             result.push(paths[i]);
//         }
//     }
//     return '/' + result.join('/');
// };
//
// let path = "/a/../../b/../c//.//"
//
// console.log(simplifyPath(path))

// 排序链表用的是归并排序的思想。
// 定义一个节点


/**
 * 链表排序
 */


// function sortList(head) {
//     let slow = head
//     let faster = head.next
//
//     while (faster && faster.next) {
//         slow = slow.next
//         faster = faster.next.next
//     }
//
// //    走完后，faster 指针走到链表末尾或者faster指针走到末尾的前一个位置
// //    而 slow 指针则走到链表的中间位置。
//     let tmp = slow.next
//     slow.next = null
//     let left = sortList(head)
//     let right = sortList(tmp)
//
//     let h = new Node(0)
//
//     let res = h
//     res.next = merge(left, right)
//     return res.next
// }
// //
// // function merge(left, right) {
// //     let h = new Node(0)
// //     let res = h
// //
// //     while (left && right) {
// //         if (left.value < right.value) {
// //             h.next = left
// //             h = h.next
// //             left = left.next
// //         }else {
// //
// //         }
// //     }
// //
// //     h.next = left ? left : right
// //     return res.next
// // }
//
//
// function __sortList(head) {
//     let [tmp,count] = [head, 0]
//     // 遍历一遍计算排序节点的个数
//     while (tmp) {
//         tmp = tmp.next
//         count++
//     }
//
//     let res = new Node(0)
//     res.next = head
//
//     /**
//      * 因为这里合并先是一个一个合并，然后二个二个合并。
//      * 然后在四个四个合并。是指数上升的专题
//      */
//     for(let i =1; i <= count; i = i *2) {
//         let prev = res
//         let curr = res.next
//         while (curr) {
//             let left = curr
//             // 先把第一个切掉，返回第二个。
//             let right = __cut(left, i)
//             // 然后从 right 再把 i 个给切掉
//             curr = __cut(right, i)
//
//             prev.next = __merge(left, right)
//             while (prev.next) {
//                 prev = prev.next
//             }
//         }
//     }
// }
//
// // 把链表head前head个节点给切掉，然后返回剩余的节点
// function __cut(head, size) {
//     let curr = head
//     while (--size && curr) {
//         curr = curr.next
//     }
//     if (!curr) return null
//     let next = curr.next
//     curr.next = null
//     return next
// }
//
// // 合并两个节点
// function merge(head1, head2) {
//     let h1 = head1
//     let h2 = head2
//     let node1 = new Node(0)
//     let res = node1
//     while (h1 && h2) {
//         if (h1.value < h2.value) {
//             node1.next  = h1
//             h1 = h1.next
//             node1 = node1.next
//         }else {
//             node1.next = h2
//             h2 = h2.next
//             node1 = node1.next
//         }
//     }
//
//     node1.next = h1 ? h1 : h2
//     return res.next
// }


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
//
// function hasCycle_use_show_faster_pointer(head) {
//     let slow = head.next
//     let faster = head.next.next
//
//     while (slow !== faster) {
//     //    快指针始终比慢指针跑得快，因此只判断快指针即可
//         if (faster.next === null && faster.next.next === null ) {
//             return null
//         }
//         slow = slow.next
//         faster = faster.next.next
//     }
//     faster = head
//     while (faster !== slow) {
//         faster = faster.next
//         slow = slow.next
//     }
//     return faster
// }
//
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//     let ans = nums[0]   // 表示最大子序列的和
//     let sum = 0     // 表示当前累加的最大子序列的和
//     for(let i = 0; i < nums.length; i++)  {
//         const num = nums[i]
//         if (sum >= 0) {
//             sum += num
//         }else {
//             sum = num
//         }
//         ans = Math.max(ans, sum)
//     }
//     return ans
// };


// 给定一个未排序的整数数组，找出最长连续序列的长度
// function longestConsecutive(nums) {
//     let set = new Set()
//     nums.forEach(num => {
//         set.add(num)
//     })
//     let max = 0
//     for(let x of set) {
//         // 说明序列
//         if (!set.has(x-1)) {
//             let y = x  + 1
//             while (set.has(y)) {
//                 y++
//             }
//             max = Math.max(max, y - x)
//         }
//     }
//     return max
// }
//
//
// let list = [100, 4, 200, 1, 3, 2];
// console.log(longestConsecutive(list))


// function maxProfile(prices) {
//     let maxProfit = 0
//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i; j < prices.length; j++) {
//             if (prices[j] - prices[i] > maxProfit) {
//                 maxProfit = prices[j] - prices[i]
//             }
//         }
//     }
//     return maxProfit
// }
//
//
// function __maxProfit(prices) {
//     let minprice = Number.MAX_SAFE_INTEGER
//     let maxprofit = 0
//     for(let i = 0; i < prices.length; i++) {
//         if (prices[i] < minprice) {
//             minprice = prices[i]
//         }else if (prices[i] - minprice > maxprofit) {
//             maxprofit = prices[i] - minprice
//         }
//     }
//     return maxprofit
// }
//
// let prices = [7, 1, 5, 3, 6, 4];
//
// console.log(__maxProfit(prices))

// 在 avl 树中，任一节点两个树的高度差不超过 1。
// function maxProfit(prices) {
//     let maxprofit = 0
//     for(let i = 0;i < prices.length-1; i++) {
//         if (prices[i+1] - prices[i] > 0) {
//             maxprofit += prices[i+1] - prices[i]
//         }
//     }
//     return maxprofit
// }
// let prices = [7, 1, 5, 3, 6, 4];
//
// console.log(maxProfit(prices));


// function commonAncestor(root, p, q) {
//     function findCommonAncestor(root, p, q) {
//         if (!root) return null
//         if (p.value > root.value && q.value > root.value) {
//             return findCommonAncestor(root.right, p, q)
//         }else if (p.value < root.value && q.value < root.value) {
//             return findCommonAncestor(root.left, p, q)
//         }else {
//             return root
//         }
//     }
//     if (!root) return null
//     return p.val < q.val ? findCommonAncestor(root, p, q) : findCommonAncestor(root, q, p)
// }

function findLengthofCIS(nums) {
    let ans = 1
    let cur = 1
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            cur++
        }else {
            cur = 1
        }
        ans = cur > ans ? cur : ans
    }
    return ans
}

/**
 *
 *
 *
 * 以实例[1,2,3] 为例。因为是排列问题，我们按照顺序选取数字，保证上一层出现的数据不在下一层出现，就能做的不漏
 import java.util.ArrayList;
 import java.util.List;
 import java.util.Stack;

 public class Solution {


    // curSize 表示当前的路径 path 里面有多少个元素


    private void generatePermution(int[] nums, boolean[] visited, int curSize, int len, Stack<Integer> path, List<List<Integer>> res) {
        if (curSize == len) {
            // 此时 path 已经保存了 nums 中的所有数字，已经成为了一个排列
            res.add(new ArrayList<>(path));
            return;
        }
        for (int i = 0; i < len; i++) {
            if (!visited[i]) {
                path.push(nums[i]);
                visited[i] = true;
                generatePermution(nums, visited, curSize + 1, len, path, res);
                // 刚开始接触回溯算法的时候常常会忽略状态重置
                // 回溯的时候，一定要记得状态重置
                path.pop();
                visited[i] = false;
            }
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        int len = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        boolean[] used = new boolean[len];
        if (len == 0) {
            return res;
        }
        generatePermution(nums, used, 0, len, new Stack<>(), res);
        return res;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1, 2, 3, 4};
        Solution solution = new Solution();
        List<List<Integer>> permute = solution.permute(nums);
        for (int i = 0; i < permute.size(); i++) {
            System.out.println(permute.get(i));
        }
    }
}

 */

// function generatePermution(nums, visited, curSize, len, path, res) {
//     if (curSize === len) {
//         res.push([...path])
//         return
//     }
//     // 后面出现的数据一定不能在前面出现过。为了做到这一点，我们使用数组长度这么长的数组，记为数组 used
//     // 只要上层选了一个元素，我们就此标记下，表示占位。
//     for(let i = 0; i < len; i++) {
//         if (!visited[i]) {
//             path.push(nums[i])
//             visited[i] = true
//             generatePermution(nums, visited, curSize+1, len, path, res)
//         //   回溯的时候，一定要记得状态重置
//             path.pop()
//             visited[i] = false
//         }
//     }
// }
//
//
// function run(nums) {
//     let len = nums.length
//     let used = new Array(len).fill(false)
//     console.log(used)
//     let res = []
//     generatePermution(nums, used, 0, len, [], res)
//     return res
// }
//
// console.log(run([1,2,3]))


// function generate(nums, visited, curSize, len, path, res) {
//     if (curSize === len) {
//         res.push([...path])
//         return
//     }
//     for(let i = 0; i < len; i++) {
//         if (!visited[i]) {
//             path.push(nums[i])
//             visited[i] = true
//             generate(nums, visited, curSize+1, len, path, res)
//         //   回溯的时候，一定要记得状态重置
//             path.pop()
//             visited[i] = false
//         }
//     }
// }
//
// function run(nums) {
//     let len = nums.length
//     let used = new Array(len).fill(false)
//     console.log(used)
//     let res = []
//     generate(nums, used, 0, len, [], res)
//     return res
// }
//
// console.log(run([1,2,3]))


function generate(nums, visited, curSize, len, path, res) {
    if (curSize === len) {
        res.push([...path])
        return
    }
    for(let i = 0; i < len; i++) {
        if (!visited[i]) {
            path.push(nums[i])
            visited[i] = true
            generate(nums, visited, curSize + 1, len, path, res)
            path.pop()
            visited[i] = false
        }
    }
}

function run(nums, k) {
    let len = nums.length
    let used = new Array(len).fill(false)
    let res = []
    generate(nums, used, 0, len, [], res)
    k = k - 1
    return res[k]
}
console.log(run([1,2,3], 2))
