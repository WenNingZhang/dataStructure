
const list = []
function run(nums, left, right) {
    if (left == right) {
        return nums[left];
    }

    let paras = 0;
    const mid = Math.floor((left + right) / 2);
    run(nums, left, mid);
    run(nums, mid + 1, right);

    merge(nums, left, mid, right);

    return list.length
}


function merge(nums, left, mid, right) {
    const help = [];
    let n = 0;

    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
        if (nums[i] > nums[j]) {
            for(let k = i; k <= mid; k++) {
                if (nums[k] > 2 * nums[j]) {
                    list.push([nums[k], nums[j]])
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

    //    把 help copy 到 原数组(nums)
    for (let i = 0; i < help.length; i++) {
        nums[left+i] = help[i];
    }

}

const nums = [1,3,2,3,1]

//  [3,2]、[4、2] 
console.log(run(nums, 0, nums.length - 1))