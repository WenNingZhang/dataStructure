/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解

链接：https://leetcode-cn.com/problems/maximum-subarray
答案 : https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/
 */

 function maxSubArray(nums) {
     let ans = nums[0]  // 表示最终返回的结果，表示最终的最大连续子序列
     let sum = 0
     for (let i = 0; i < nums.length; i++) {
         const num = nums[i];
         if (sum > 0) {
             sum += num
         }else {
             sum = num
         }
         ans = Math.max(ans, sum)
     }
     return ans
 }

 let nums = [-2,1,-3,4,-1,2,1,-5,4]
 console.log(maxSubArray(nums))


// 方法二： 利用分治法
function maxSubArray2(nums) {
    function cross(nums, left, right, p) {
        if (left === right) return nums[left]
        
        let leftSubSum = Number.MIN_VALUE
        let currSum = 0
        for(let i = p; i > left -1 ; i--) {
            currSum += nums[i]
            leftSubSum = Math.max(leftSubSum, currSum)
        }

        let rightSubSum = Number.MIN_VALUE
        currSum = 0
        for (let i = p + 1; i < right + 1; i++) {
            currSum += nums[i]
            rightSubSum = Math.max(rightSubSum, currSum)
        }
        return leftSubSum + rightSubSum
    }
    function helper(nums, left ,right) {
        if (left === right) return nums[left]
        const p = parseInt((left + right) / 2)
        const leftSum = helper(nums, left, p)
        const rightSum = helper(nums, p+1, right)
        const crossSum = cross(nums, left, right, p)
        return Math.max(leftSum, rightSum, crossSum)
    }

    return helper(nums, 0, nums.length-1)
}

console.log(maxSubArray2(nums))