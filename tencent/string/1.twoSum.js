
/**
 *两数之和
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
    // 先把原来的nums copy 一份，保存原来的位置索引，用于下面的返回。
    const temp = []
    for (let i = 0; i < nums.length; i++) {
        temp[i] = nums[i]
    }
    nums.sort((a, b) => a - b)  // 使用快排partition 思想。
    let i = 0;
    let j = nums.length - 1
    const result = []
    const reusltArray = []
    while (i < j) {
        if (nums[i] + nums[j] === target) {
            result.push(i)
            result.push(j)
            break
        } else if (nums[i] + nums[j] < target) {
            i++
        } else {
            j--
        }
    }
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === nums[result[0]]) {
            if (reusltArray.indexOf(i) < 0) {
                reusltArray.push(i)
            }
        }
        if (temp[i] === nums[result[1]]) {
            if (reusltArray.indexOf(i) < 0) {
                reusltArray.push(i)
            }
        }
    }
    return reusltArray
};

// let nums = [3, 3], target = 6
// console.log(twoSum(nums, target))

//  https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-2/
/**
 * 使用 map 表，一张 map 表的 key 记录当前数组的值，value 值记录该值的索引。
 * 然后在遍历一次数组，判断 nums[i] 和 (target-nums[i]) 是否存在。如果存在说明存在两数相加等于 target 值的数组值。
 * @param {*} nums
 * @param {*} target
 */
var __twoSum = function (nums, target) {
    const map = new Map()
    for(let i =0 ; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    const result = []
    for(let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && map.has(target - nums[i]) && map.get(nums[i]) !== map.get(target - nums[i])) {
            console.log(i)
            result.push(i, map.get(target - nums[i]))
            break
        }
    }
    return result
}


let _nums = [2, 7, 11, 15], _target = 9
console.log(__twoSum(_nums, _target))
