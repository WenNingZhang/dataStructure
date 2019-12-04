/**
 * 删除排序数组中的重复项|
 * 给定一个数组，你需要在原地删除重复出现的元素，使得每个元素仅出现一次，返回移除后数组的新长度。
 *
 * public int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
 **/

/**
 * 双指针法
 * i 是慢指针
 * j 是快指针
 * 只有 nums[i] === nums[j] ,我们就增加 j 以跳过重复项。
 * 当遇到 nums[i] !== nums[j] 时，跳过重复项的过程已经结束，因此需要把nums[j] 复制到 nums[i+1]。
 * 然后递增 i， 接着重复相同的过程，直到循环完成
 * @param nums
 * @returns {number}
 */

function removeDuplicates(nums) {
    if (nums.length === 0) return 0
    let i = 0
    for(let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i+1
}


const nums = [0,0,1,1,1,2,2,3,3,4]
console.error('==>', removeDuplicates(nums), nums)
