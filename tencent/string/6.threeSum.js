/**
 *  三数之和
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
 * 伪代码
 * 1.先把数组排好序
 * 2.然后对于数组中任意位置i。设置 i 的下一个位置为 L。 数组的最后一个位置
 * 为 R。
 * 3. 在 L < R 的前提下，两者往中间挤压。其中还要判断下避免出现重复元素。 
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
        let L = i + 1
        let R = nums.length - 1
        // 因为不能包含重复的三元组,因此 L 不能等于 R
        while (L < R) {
            if (nums[i] + nums[L] + nums[R] === 0) {
                result.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] === nums[L + 1]) {
                    L++    // 避免重复的数据。
                }
                while (L < R && nums[R] === nums[R - 1]) {
                    R--    // 避免重复的数据。
                }
                L++
                R--
            } else if ((nums[i] + nums[L] + nums[R]) < 0) {
                L++
            } else {
                R--
            }
        }
    }
    return result
};

let nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums))
