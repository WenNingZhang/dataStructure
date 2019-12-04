/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/895/
 * 寻找两个有序数组的中位数
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
 */

// 谁小合并谁，这个是应用 merge 的排序思想的。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0
    let list = []
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            list.push(nums1[i])
            i++
        } else if (nums1[i] > nums2[j]) {
            list.push(nums2[j])
            j++
        } else {
            list.push(nums1[i])
            list.push(nums2[j])
            i++
            j++
        }
    }

    if (i < nums1.length) {
        while(i < nums1.length) {
            list.push(nums1[i])
            i++
        }
    }

    if (j < nums2.length) {
        while(j < nums2.length) {
            list.push(nums2[j])
            j++
        }
    }
    const length = list.length
    if (length % 2 === 0) {
        return (list[parseInt(length/2)] + list[parseInt(length/2)-1])/2
    } else {
        return list[parseInt(length/2)]
    }
};

let nums1 = [1, 2],nums2 = [3,4]

console.log(findMedianSortedArrays(nums1, nums2))


