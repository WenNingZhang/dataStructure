/**
 * 搜索旋转排序数组
 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

 ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

 你可以假设数组中不存在重复的元素。

 你的算法时间复杂度必须是 O(log n) 级别。

 示例 1:

 输入: nums = [4,5,6,7,0,1,2], target = 0
 输出: 4
 示例 2:

 输入: nums = [4,5,6,7,0,1,2], target = 3
 输出: -1



 解题思路:
 要求时间复杂度是 O(logN)。因此要考虑到二分查找算法。怎么分是关键
 1、由于题目说过无重复，
 比如是1 2 3 4 5 6 7。可以分成两类
 第一类: 2 3 4 5 6 7 1 。是 nums[start] < nums[mid]。例子中是2 <= 5
 这种情况下，前半部分是有序的。因此如果nums[start] <= target <= nums[mid]。则在前半部分查找，否则就在后半部分查找。
 第二类 6 7 1 2 3 4 5 这种，也就是 nums[start] > nums[mid]。此例子中就是 6 > 2。
 这种情况下，后半部分有序。因此如果 nums[mid] <target<=nums[end]，则在后半部分找，否则去前半部分找。
 **/
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/ji-bai-liao-9983de-javayong-hu-by-reedfan/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums || nums.length === 0) return -1;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        // 说明前半部分是有序的
        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            //    说明后半部分是有序的
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;

            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
const a = [5,1,3];
console.log(search(a, 3));
