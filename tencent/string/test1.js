/**
 * 给定一个整数数组nums 和 一个目标值 target。请找到该数组中和为目标值的那两个整数，并返回
 **/

// function twoSum(nums, target) {
//     const temp = []
//     for (let i = 0; i < nums.length; i++) {
//         temp[i] = nums[i]
//     }
//
//     nums.sort((a, b) => a - b)
//
//     let i = 0
//     let j = nums.length - 1
//
//     const result = []
//     const result1 = []
//
//     while (i <= j) {
//         if (nums[i] + nums[j] === target) {
//             result.push(nums[i])
//             result.push(nums[j])
//             break
//         }else if (nums[i] + nums[j] < target) {
//             i++
//         } else if (nums[i] + nums[j] > target) {
//             j--
//         }
//     }
//
//     if (result.length < 2) {
//         return []
//     }
//     for(let i =0; i < temp.length; i++) {
//         if (temp[i] === result[0] && result1.indexOf(i) < 0) {
//             result1.push(i)
//         }
//         if (temp[i] === result[1] && result1.indexOf(i) < 0) {
//             result1.push(i)
//         }
//     }
//     return result1
// }
//
//
//
// function __towSum(nums, target) {
//     const map = new Map()
//     for(let i = 0; i < nums.length; i++) {
//         map.set(nums[i], i)
//     }
//
//     const result = []
//     for(let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i]) && map.has(target - nums[i]) && map.get(nums[i]) !== map.get(target - nums[i])) {
//             console.log(i)
//             result.push(i, map.get(target - nums[i]))
//             break
//         }
//     }
//     return result
// }
//
//
//
// let nums = [3,2,4,5,5]
// let target = 10
// console.log(__towSum(nums, target))

// function findMedian(nums1, nums2) {
//     let i = 0;
//     let j = 0
//     let list = []
//
//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] < nums2[j]) {
//             list.push(nums1[i])
//             i++
//         }else if (nums1[i] > nums2[j]) {
//             list.push(nums2[j])
//             j++
//         }else if (nums1[i] === nums2[j]) {
//             list.push(nums1[i], nums2[j])
//             i++
//             j++
//         }
//     }
//     if (i < nums1.length) {
//         while (i < nums1.length) {
//             list.push(nums1[i])
//             i++
//         }
//     }
//     if (j < nums2.length) {
//         while (j < nums2.length) {
//             list.push(nums2[j])
//             j++
//         }
//     }
//
//     const index = parseInt(list.length / 2)
//     if (list.length %2 === 0) {
//         return (list[index] + list[index -1]) / 2
//     }else {
//         return list[index]
//     }
// }
//
//
//
// let nums1 = [1, 3],nums2 = [2]
//
// console.log(findMedian(nums1, nums2))

/**
 * 最长公共前缀
 * @param strs
 */
// function longestCommonPrefix(strs) {
//     if (strs.length === 1) return strs[0];
//     let maxCommonPrefix = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         // strs[i] 如果以 maxCommonPrefix 开头，说明是最长公共前缀。否则则不是。
//         while (strs[i].indexOf(maxCommonPrefix) !== 0) {
//             maxCommonPrefix = maxCommonPrefix.substring(0, maxCommonPrefix.length - 1);
//             if (maxCommonPrefix === '') return '';
//         }
//     }
//     return maxCommonPrefix;
// }
//
//
// let strs = ["ac","acc","accc"]
//
// console.log(longestCommonPrefix(strs))

/**
 * 编写一个函数来计算查找字符串中最长公共前缀的长度
 */

// function longestCommonPrefix(strs) {
//     if (strs.length === 1) return strs[0]
//     let max = strs[0]
//     for(let i = 1; i < strs.length; i++) {
//         let str= strs[i]
//         while(str.indexOf(max) < 0) {
//             max = max.substring(0, max.length - 1)
//             if (max === '') return ''
//         }
//     }
//     return max
// }
//
// let strs = ["ac","acc","accc"]
// console.log(longestCommonPrefix(strs))


// function longestCommontPrefix(strs) {
//     if (strs.length === 0) return ""
//     if (strs.length < 2) return strs[0]
//     let max = strs[0]
//     for(let i = 1; i< strs.length; i++) {
//         const str = strs[i]
//         // str.indexOf(max) === 0 表示: str的前缀是以max开头
//         while (str.indexOf(max) !== 0) {
//             max = max.substring(0, max.length - 1)
//             if (max === '') return ''
//         }
//     }
//     return max
// }
// let strs = ["c","acc","ccc"]
// // strs = []
// console.log(longestCommontPrefix(strs))

// [ -4, -1, -1, 0, 1, 2 ]
//
//        |       |  |
//

// function threeSum(nums) {
//     nums.sort((a, b) => a - b)
//     let result = []
//     for(let i = 0; i < nums.length; i++) {
//         let cur = nums[i]
//         if (cur > 0) break;     // 如果当前数大于 0。则三数之和一定大于 0。所以结束本次循环即可
//         if (i >0 &&  nums[i] === nums[i - 1]) continue;
//         let L = i + 1
//         let R = nums.length - 1
//
//         // 因为不能包含重复的三元组,因此 L 不能等于 R
//         while (L < R) {
//             const sum = cur + nums[L] + nums[R]
//             if (sum === 0) {
//                 result.push([cur, nums[L], nums[R]])
//                 while (L < R && nums[L] === nums[L+1]) {
//                     L++
//                 }
//                 while (L < R && nums[R] === nums[R-1]) {
//                     R--
//                 }
//                 L++
//                 R--
//             }else if (sum < 0) {
//                 L++
//             }else if (sum > 0) {
//                 R--
//             }
//         }
//     }
//     return result
// }
//
// let nums = [-1, 0, 1, 2, -1, -4]
//
// console.log(threeSum(nums))

// function threeSum(nums) {
//     nums.sort((a, b) => a - b);
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         const cur = nums[i];
//         if (cur > 0) break;
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let left = i + 1;
//         let right = nums.length - 1;
//
//         while (left < right) {
//             const sum = cur + nums[left] + nums[right];
//             if (sum === 0) {
//                 result.push([cur, nums[left], nums[right]]);
//                 while (left < right && nums[left] === nums[left + 1]) {
//                     left++;
//                 }
//                 while (left < right && nums[right] === nums[right - 1]) {
//                     right--;
//                 }
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else if (sum > 0) {
//                 right--;
//             }
//         }
//     }
//     return result;
// }
//
//
// let nums = [-1, 0, 1, 2, -1, -4];
//
// console.log(threeSum(nums));

/**

 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 **/


// function closeThreeSum(nums, target) {
//     if (nums.length < 3) return
//     nums.sort((a, b) => a - b)
//     let result = Number.MAX_VALUE
//     for(let i = 0; i < nums.length; i++) {
//         const cur = nums[i]
//         let left = i+1
//         let right = nums.length - 1
//
//         while (left < right) {
//             const sum = cur + nums[left] + nums[right]
//             if (Math.abs(sum-target) < Math.abs(result-target)) {
//                 result = sum
//             }
//             // if (sum > target) {
//             //
//             // } else if
//             // if (Math.abs(sum-target) < result) {
//             //     result = Math.abs(sum-target)
//             //
//             // }
//             if (sum > target) {
//                 right--
//             }else if (sum < target) {
//                 left++
//             } else if (sum === target) {
//                 return result
//             }
//         }
//
//     }
// }


// function threeSumClose(nums, target) {
//     nums.sort((a,b) => a - b)
//     let result = Number.MAX_VALUE
//     for(let i = 0; i < nums.length; i++) {
//         let left = i +1
//         let right = nums.length - 1
//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right]
//             if (Math.abs(sum-target) < Math.abs(result-target)) {
//                 result = sum
//             }
//             if (sum > target) {
//                 right--
//             }else if (sum < target) {
//                 left++
//             } else if (sum === target) {
//                 return sum
//             }
//         }
//     }
//
//     return result
// }
//
// let nums = [-1,2,1,-4],  target = 1
// // 2
// console.log(threeSumClose(nums, target))


/**
 * 三个数相加等于某个值 | 三个值相加接近于某个值 ===> 这种情况要排好序的数组才能起作用。因此开始前请一定要排好序啊
 *
 * 查找与target 最接近的三个数组值
 * @param nums
 * @param target
 */
// function theeCloseSum(nums, target) {
//     nums.sort((a,b) => a - b)
//     if (nums.length < 3) return
//     let result = Number.MAX_VALUE
//     for(let i = 0; i < nums.length; i++) {
//         const cur = nums[i]
//         // console.log('==>', cur)
//         let left = i + 1
//         let right = nums.length - 1
//         while (left < right) {
//             const sum = cur + nums[left] + nums[right]
//             if (Math.abs(sum-target) < Math.abs(result-target)) {
//                 result = sum
//             }
//             if (sum > target) {
//                 right--
//             }else if (sum < target) {
//                 left++
//             }else if (sum=== target) {
//                 return result
//             }
//         }
//     }
//     return result
// }
// let nums = [-1,2,1,-4],  target = 1
// // 2
// console.log(theeCloseSum(nums, target))


// //   有效的括号
// class Stack {
//     constructor() {
//         this.arr = []
//         this.next = 0   // 1、表示栈大小 2、表示下一个入栈的数放在哪儿。
//     }
//
// // 取出栈顶元素
//     peek() {
//         if (this.next === 0) {
//             return null
//         }
//         return this.arr[this.next - 1]
//     }
//
// //  放入栈顶元素，并且next 指针++
//     push(value) {
//         this.arr[this.next++] = value
//     }
//
//     pop() {
//         if (this.next === 0) {
//             console.error('栈空，无法弹出')
//             return
//         }
//         return this.arr[--this.next]
//     }
//
//     isEmpty() {
//         return this.next === 0 ? true : false
//     }
// }
//
// function isValid(s) {
//     const stack = new Stack()
//     const items = s.split('')
//     for(let i = 0; i < items.length; i++) {
//         const item = items[i]
//         if (['(', '{', '['].indexOf(item) >= 0) {
//             stack.push(item)
//         } else {
//             if (item === ')') {
//                 if (stack.peek() === '(') {
//                     stack.pop()
//                 }else {
//                     return false
//                 }
//             }
//             if (item === '}') {
//                 if (stack.peek() === '{') {
//                     stack.pop()
//                 }else {
//                     return false
//                 }
//             }
//             if (item === ']') {
//                 if (stack.peek() === '[') {
//                     stack.peek()
//                 } else {
//                     return false
//                 }
//             }
//         }
//     }
//     return stack.isEmpty() ? true : false
// }
//
//
// let a = "()"
//
// console.log(isValid(a))
//
// let b = "()[]{}"
// console.log(isValid(b))
//
// let c = "([)]"
// console.log(isValid(c))


// class stack {
//     constructor() {
//         this.arr = []
//         this.next = 0   // 1、表示栈大小  2、表示栈中元素下一个放入的位置
//     }
//     pop() {
//         return this.arr[--this.next]
//     }
//     push(value) {
//         this.arr[this.next++] = value
//     }
//     peek() {
//         return this.arr[this.next - 1]
//     }
//     isEmpty() {
//         return this.next === 0 ? true : false
//     }
// }

/**
//  * 删除排序数组的重复元素
//  * @param nums
//  * @returns {number}
//  */
// function removeDuplicates(nums) {
//     if (nums.length === 0) return
//     let i = 0
//     for(let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++
//             nums[i] = nums[j]
//         }
//     }
//     return i+1
// }
//
// const nums = [0,0,1,1,1,2,2,3,3,4]
// const length = removeDuplicates(nums)
// for(let i = 0; i < length; i++) {
//     console.log(nums[i])
// }
// console.error('==>', removeDuplicates(nums), nums)

// function removeDuplicate(nums) {
//     if (nums.length === 0) return []
//     let i = 0
//     for(let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++
//             nums[i] = nums[j]
//         }
//     }
//     return i+1
// }


// function __maxArea(heights) {
//     let left = 0
//     let right = heights.length - 1
//     let max = 0
//     while (left < right) {
//         max = Math.max(max, (right-left) * Math.min(heights[right], heights[left]))
//         if (heights[left] < heights[right]) {
//             left++
//         }else {
//             right--
//         }
//     }
//     return max
// }
//
// const heights = [1,8,6,2,5,4,50,300,7]
// console.log(__maxArea(heights))


// function add(num1, num2) {
//     let i = num1.length - 1
//     let j = num2.length - 1
//
//     let carry = 0
//     let res = ''
//     while (i >= 0 || j >=0) {
//         let n1 = i >= 0 ? num1.charAt(i) - '0' : 0
//         let n2 = j >= 0 ? num2.charAt(j) - '0' : 0
//         let tmp = n1 + n2 + carry
//         carry = parseInt(tmp/10)
//         res += tmp % 10
//         i--
//         j--
//     }
//     if (carry === 1) res += 1
//     return res.split('').reverse().join('')
// }
//
//
// let num1 = '123';
// let num2 = '971111';
//
// console.log(add(num1, num2));


function add(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1

    let res = ''
    let carry = 0
    while (i >= 0 || j >=0) {
        let n1 = i >= 0 ? num1.charAt(i) - '0' : 0
        let n2 = j >= 0 ? num2.charAt(j) - '0' : 0
        let tmp = n1 + n2 + carry
        carry = parseInt(tmp/10)
        res += tmp % 10
        i--
        j--
    }
    if (carry === 1) res += 1
    return res.split('').reverse().join('')
}


let num1 = '123';
let num2 = '971111';

console.log(add(num1, num2));
