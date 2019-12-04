/**
 * 最接近的三数之和
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
// 三个数相加等于某个值 | 三个值相加接近于某个值 ===> 这种情况要排好序的数组才能起作用。因此开始前请一定要排好序啊
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let ans = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        let L = i + 1
        let R = nums.length - 1
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            // 表示 sum和target 之间的距离比sum|target之间的近
            if (Math.abs(sum-target) < Math.abs(ans-target)) {
                ans = sum
            }
            if (sum > target) {
                R--
            }else if (sum < target) {
                L++
            } else {
                return ans
            }
        }
    }
    return ans
};

let nums = [-1,2,1,-4],  target = 1
// 2
console.log(threeSumClosest(nums, target))
