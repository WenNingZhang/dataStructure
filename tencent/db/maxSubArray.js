/**
 * 【题目】
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

 /**
  * 【思路】
  *  ans 表示最大连续子序列的和
  *  sum 表示当前累加中最大子序列的和
  * 
  */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0]   // 表示最大子序列的和
    let sum = 0     // 表示当前累加的最大子序列的和
    for(let i = 0; i < nums.length; i++)  {
        const num = nums[i]
        if (sum >= 0) {
            sum += num
        }else {
            sum = num
        }
        ans = Math.max(ans, sum)
    }
    return ans
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums))

