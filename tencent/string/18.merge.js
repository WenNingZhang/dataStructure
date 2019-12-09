/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

 说明:

 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 示例:

 输入:
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3

 输出: [1,2,2,3,5,6]
 **/

function merge(num1, m, num2, n) {
    let i = 0
    let j = 0
    let result = []
    let k = 0
    while (i < m && j < n) {
        result[k++] = num1[i] < num2[j] ? num1[i++] : num2[j++]
    }
    while (i < m) {
        result[k++] = num1[i++]
    }
    while (j < n) {
        result[k++] = num2[j++]
    }
    result.forEach((item, index) => {
        num1[index] = item
    })
}

let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]

merge(nums1, 3, nums2, 3)
console.log(nums1)
