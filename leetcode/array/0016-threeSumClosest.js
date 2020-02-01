/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
 * 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

链接：https://leetcode-cn.com/problems/3sum-closest
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return []
    nums = nums.sort((a,b) => a-b)
    let sum = nums[0] + nums[1] + nums[2]
    loop:
    for(let i = 0; i < nums.length; i++) {
        let L = i +1
        let R = nums.length - 1
        while( L < R) {
            const currentSum = nums[i] + nums[L] + nums[R]
            if (Math.abs(target - currentSum) <= Math.abs(target - sum)) {
                sum = currentSum
            }
            // 如果当前值和 target 相等。说明是最接近target 的值了。直接就可以跳出两层循环了。没必要再往下循环了
            if (currentSum === target) {
                break loop
            }
            if (currentSum < target) {
                L++
            }
            if (currentSum > target) {
                R--
            }
        }
    }
    return sum
};

let nums = [-1,2,1,-4],target = 1
console.log(threeSumClosest(nums, target))