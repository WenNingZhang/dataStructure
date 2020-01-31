/**
 * 两数之和的相加用 target 计算得到。
 *
 * 1、先把两个数放到 map 中
 * 2。遍历整个数组，判断cur和 target-cur 是否都存在
 * 3. 如果都存在。说明存在这个值啊。
 *
 * 三个值相加等于 0
 * 先把三个数值进行排序。O(NlogN)
 * 1、指示两个指针 left = 0 right = nums.length -1
 * 2、while(left<right) {
 *      const sum = nums[i] + nums[left] + nums[right]
 *      if (sum === 0) {
 *
 * }
 * }
 *
 * 2、岛的个数和最大岛的面试是多少。通过感染的方式进行操作。正所谓感染上、感染下、感染左、感染右才行啊
 *
 */

//  max_area = Math.max(max_area, infect(grid, i, j))


//  function infect(grid, i, j) {
//     if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === 1) {
//         grid[i][j] = 2
//         return 1 + infect(grid, i + 1, j) + infect(grid, i -1 , j)
//             + infect(grid, i, j + 1) + infect(grid, i, j - 1)
//     }

//     return 0
//  }

/**
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0        4比 7 小    前面有序
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

[7,0,1,2,3,4,5,6]   // 后面有序

 */

// 这个也是二分查找的应用啊
/**
 * 判断处理是前半部分有序，下面就是就是确认 target 的值了，再分成两种情况
 * 在旋转的数组中找到一个数值。
 * 既然知道在前半部分是有序的，那么就把满足要求的数值从前半部分查找
 * 如果知道后半部分是有序的，那就利用后半部分有序的特性做文章。
 * 1、target 在有序区间的怎么办?
 * 2、target 没在有序区间应该怎么办？
 */
//  function search(nums, target) {
//     let start = 0
//     let end = nums.length - 1

//     while(start < end) {
//         let mid = parseInt((start + end) /2 )
//         if (nums[mid] === target) {
//             return mid
//         }
//         // else if (nums[mid] < target) {
//         //     if ()
//         // } else if (nums[mid] > target) {

//         // }
//         // 前半部分有序
//         if (nums[start] <= nums[mid]) {
//             if (target >= nums[start] && target <= nums[mid]) {
//                 end = mid - 1
//             }else {
//                 start = mid + 1
//             }
//         }else if (nums[start] > nums[mid]){
//             if (target >= nums[mid] && target <= nums[end]) {
//                 start = mid + 1
//             }else {
//                 end = mid -1
//             }
//         }
//     }
//     return -1
//  }


//  在一个有序数组中 比如 let nums = [5,7,8,8,8,10], target = 8
// 找到 8的左边界的位置。并且返回

// //  这个才是二分查找的logic。
// function left_bound(nums, target) {
//     let left = 0
//     let right = nums.length - 1
//     while(left <= right) {
//         const mid = parseInt((left + right) / 2)
//         if (nums[mid] === target) {
//             right = mid - 1
//         } else if (nums[mid] < target) {
//             left = mid + 1
//         } else if (nums[mid] > target) {
//             right = mid - 1
//         }
//     }
//     if (left < nums.length && nums[left] === target) {
//         return left
//     }
//     return -1

// }

// function findLengthOfLCIS(nums) {
//     let max = 1 // 最长连续递增子序列的长度
//     let cur = 1 // 当前连续递增子序列的长度

//     for(let i = 0 ; i < nums.length - 1; i++) {
//         if (nums[i + 1] > nums[i]) {
//             cur++
//         }else {
//             cur = 1
//         }
//         max = Math.max(cur, max)
//     }
//     return max
// }

// let nums  = [1,3,5,4,7]

// console.log(findLengthOfLCIS(nums))


// 使用 partition 思想找到数组中第 k 大的数

// 使用 partition 思想找到第 k 大的数值。
function swap(arr, i, j) {
    let tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}

function partition(arr, begin ,end) {
    let small = begin - 1   // 小于区的值
    let big = end           // 大于区的值
    let cur = begin         // 当前值

    while(cur < big) {
        if (arr[cur] < arr[end]) {
            swap(arr, ++small, cur++)
        }else if (arr[cur] > arr[end]) {
            swap(arr, cur, --end)
        }else if (arr[cur] === arr[end]) {
            cur++
        }
    }

    swap(arr, end, cur)
    return {
        'small' : small + 1,
        'big' : big
    }
}

/**
 * 从数组中找到第 k 大的数值。
 * 分析: 如果从小到大排序，第 k 大的数就是第(k-1)位置上的数值。
 * @param {*} arr
 * @param {*} begin
 * @param {*} end
 * @param {*} i
 */
function topK (arr, begin ,end, i) {
    if (begin >= end) {
        return -1
    }
    const { small, big } = partition(arr, begin, end)
    if ( i>= small && i <= big) {
        return arr[i]
    }else if (i < small) {
        return topK(arr, begin, small-1, i)
    }else if (i > big) {
        return topK(arr, big, end+1, i)
    }
}



/**
 * 在一个未排序的整数数组中，找出最长连续序列的长度
 * 要求算法的时间复杂度是 O(N)。
 * def longestConsecutive(self, nums):
    nums = set(nums)
    best = 0
    for x in nums:
        if x - 1 not in nums:
            y = x + 1
            while y in nums:
                y += 1
            best = max(best, y - x)
    return best
 */

//  function longestConsecutive(nums) {
//     const set = new Set();
//     nums.forEach(num => {
//         set.add(num);
//     });
//     let best = 0
//     for(let item of set) {
//         // if the number is the start of the streak(ie: x-1 not in set)
//         //  then test y = x +1 ，x + 2/ x + 3 ... and stop at first number y not in the set
//         // the length of the streak is then simply y - x and update our globe best with
//         // 如果 number 是连续序列的开始位置
//         if (!set.has(item-1)) {
//             let y = item + 1
//             while (set.has(y)) {
//                 y += 1
//             }
//             best = Math.max(best, y - item)
//         }
//     }
//     return best
//  }

//  let list = [100, 4, 200, 1, 3, 2];
// console.log('==>', longestConsecutive(list));


// function longestConsecutive(nums) {
//     let set = new Set()
//     nums.forEach(element => {
//         set.add(element)
//     });
//     let max = 0
//     for(let x of set) {
//         if (!set.has(x-1)) {
//             let y = x + 1
//             while(set.has(y)) {
//                 y++
//             }
//             max = Math.max(y - x, max)
//         }
//     }
//     return max
// }

//  let list = [100, 4, 200, 1, 3, 2];
// console.log('==>', longestConsecutive(list));

/**
 * Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

public List<List<Integer>> permute(int[] nums) {
   List<List<Integer>> list = new ArrayList<>();
   // Arrays.sort(nums); // not necessary
   backtrack(list, new ArrayList<>(), nums);
   return list;
}

private void backtrack(List<List<Integer>> list, List<Integer> tempList, int [] nums){
   if(tempList.size() == nums.length){
      list.add(new ArrayList<>(tempList));
   } else{
      for(int i = 0; i < nums.length; i++){
         if(tempList.contains(nums[i])) continue; // element already exists, skip
         tempList.add(nums[i]);
         backtrack(list, tempList, nums);
         tempList.remove(tempList.size() - 1);
      }
   }
}
 */



/**
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
 */

// 那么比较直接的解法就是 DFS 搜索，对于某个人，遍历其好友，然后再遍历其好友的好友，
// 那么就能把属于同一个朋友圈的人都遍历一遍，同时标记出已经遍历过的人，然后累积朋友圈的个数，
// 再去对于没有遍历到的人在找其朋友圈的人，这样就能求出个数

// function findCircleNum(M) {
//     let visited = new Array(M.length).fill(false)
//     let cnt = 0
//     for(let i = 0; i < M.length; i++) {
//         visited[i] = true
//         // 总共是四个人，初始时设置这些人都没有被访问。
//         // 当访问第 i 个人是，设置为 true。表示已经访问过。
//         help(M, visited, i)
//         cnt++
//     }
//     return cnt
// }
//
// function help(mat, visited, i) {
//     console.log(mat, visited, i)
//     for(let j = 0; j < mat.length; j++) {
//         if (mat[i][j] === 1 && visited[j] === false) {
//             visited[j] = true
//             help(mat, visited, j)
//         }
//     }
// }
//
// let list = [
//     [1,0,0,1],
//     [0,1,1,0],
//     [0,1,1,1],
//     [1,0,1,1]
// ]
//
//
// console.log(findCircleNum(list))


//
// function findCircleNum(M) {
//     let visited = new Array(M.length).fill(false)
//     let  result = 0
//     for(let i = 0; i < M.length; i++) {
//         result++
//         visited[i] = false
//         help(M, visited, i)
//     }
//     return result
//     function help(M, visited, i) {
//         for(let j = 0; j < M.length; j++) {
//             if (M[i][j] === 1 && visited[j] === false) {
//                 visited[j] = true
//                 help(M, visited, j)
//             }
//         }
//     }
// }
//
//
//
//
//
//
//
//
//
//
// let list = [
//     [1,0,0,1],
//     [0,1,1,0],
//     [0,1,1,1],
//     [1,0,1,1]
// ]
//
//
// console.log(findCircleNum(list))



// // 合并区间
// function mergeInterval(intervals) {
//    let res = []
//     for(let i = 0 ; i  < intervals.length; i++) {
//         let left = intervals[i][0]
//         let right = intervals[i][1]
//         while (i < intervals.length - 1 && intervals[i+1][0] <= right) {
//             i++
//             right = Math.max(right, intervals[i][1])
//         }
//         res.push([left, right])
//     }
//     return res
// }
//
//
// let a = [[1,3],[2,6],[5,10],[15,18]]
// console.log(mergeInterval(a))


var trap = function(height) {
    let leftMax = -1, rightMax = -1, left = 0, right = height.length - 1, res = 0
    while (left <= right) {
        leftMax = height[left] > leftMax ? height[left] : leftMax
        rightMax = height[right] > rightMax? height[right] : rightMax
        console.log('---->', leftMax, rightMax, rightMax - height[right], leftMax - height[left])
        if (leftMax > rightMax) {
            res += rightMax - height[right]
            right--
        }
        else {
            res += leftMax - height[left]
            left++
        }
    }
    return res
};


let heigth = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(heigth))
