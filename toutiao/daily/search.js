/**
 *   异或操作
 *   a^b 对于每一个比特位，当两个操作数对应的bit位有且只有一个为 1 时，结果为 1，否则为 0
 * 
 * 问题的一个简单版本：一个数组里除了一个数字之外，其他的数字都出现了两次。请写程序找出这个只出现一次的数字
 */

 function __search(nums) {
    return nums.reduce((result, cur)=> {
        return result ^ cur
    }, 0)
 }

 const nums = [1,20, -20, 20, -20, 1, 50]

//  console.log(__search(nums))
// https://zhuanlan.zhihu.com/p/40652166
/**
 * plus 版本
 * 题目：一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
 * 要求时间复杂度是O(n)，空间复杂度是O(1)。
 */

// 方式一用 hashMap 求解
// function __search1(nums) {
//     const set = new Set()
//     nums.forEach(element => {
//         if (set.has(element)) {
//             set.delete(element)
//         }else {
//             set.add(element)
//         }
//     });
//     console.log(set)
// }

// 方式二: 再次用上面的异或思想进行求解。
// 

// https://zhuanlan.zhihu.com/p/40652166
function findNumsAppearOnce(arr) {
    let num = 0
    arr.forEach(item => {
        num = num ^ item
    })
    // 找到num 中的哪一位是1的
    let index = 0
    while((num & 1) === 0) {
        num = num >> 1
        index++
    }
    let value1, value2 = [0, 0]
    for(let i = 0; i < arr.length; i++) {
        if(isal(arr[i], index)) {
            value1 ^= arr[i];
        } else {
            value2 ^= arr[i]
        }
    }
    return { value1 ,value2 }
    function isal(i, index) {
        i = i >> index
        return (i & 1) === 1
    }
}

const nums1 = [1,1,2,4,5,4,5,3]
console.log(nums1)
console.log(findNumsAppearOnce(nums1))