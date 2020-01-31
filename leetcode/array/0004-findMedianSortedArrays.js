function findMedianSortedArrays(nums1, nums2) {
    let result = []
    let i = 0, j = 0
    while(i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i])
            i++
        } else if (nums1[i] > nums2[j]) {
            result.push(nums2[j])
            j++
        } else if (nums1[i] === nums2[j]) {
            result.push(nums1[i])
            result.push(nums2[j])
            i++, j++
        }
    }
    if (i < nums1.length) {
        while(i < nums1.length) {
            result.push(nums1[i])
            i++
        }
    }
    if (j < nums2.length) {
        while(j < nums2.length) {
            result.push(nums2[j])
            j++
        }
    }
    const mid = result.length % 2 === 0 ? (result[result.length/2 - 1] + result[result.length/2]) / 2 : result[parseInt(result.length/2)]
    return mid
}

let nums1 = [1, 2]
let nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))