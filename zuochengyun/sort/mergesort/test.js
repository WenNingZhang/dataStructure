/**
 * @param {number[]} nums
 * @return {number}
 */
let list = 0
var reversePairs = function(nums) {
    if (nums.length === 0) return 0
    return run(nums, 0, nums.length-1)
};

function run(nums, left, right) {
    if (left == right) {
        return 0
    }
    const mid = Math.floor((left + right) / 2);
    run(nums, left, mid);
    run(nums, mid + 1, right);

    merge(nums, left, mid, right);

    return list
}

function merge(nums, left, mid, right) {
    const help = [];
    let n = 0;
    let i = left;
    let j = mid + 1;
    while (i <= mid && j <= right) {
        if (nums[i] > nums[j]) {
            for(let k = i; k <= mid; k++) {
                if (nums[k] > (2 * nums[j])) {
                    list++
                }
            }
            help[n++] = nums[j++];
        } else {
            help[n++] = nums[i++];
        }
    }
    while (i <= mid) {
        help[n++] = nums[i++];
    }
    while (j <= right) {
        help[n++] = nums[j++];
    }
    // copy help
    for (let i = 0; i < help.length; i++) {
        nums[left+i] = help[i];
    }
}

console.log('===>', reversePairs([2,4,3,5,1]))