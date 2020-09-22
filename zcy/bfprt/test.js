function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}

function partition(arr, begin, end) {
    let cur = begin;
    let bigger = begin - 1;
    let less = end;
    while (cur < less) {
        if (arr[cur] < arr[end]) {
            swap(arr, cur, --less);
        } else if (arr[cur] > arr[end]) {
            swap(arr, cur++, ++bigger);
        } else {
            cur++;
        }
    }
    swap(arr, less, end);
    return {
        bigger: bigger + 1,
        less: less
    };
}


function topK(nums, begin, end, index) {
    if (begin === end) {
        return arr[begin];
    }
    const {bigger, less} = partition(nums, begin, end);
    if (index >= bigger && index <= less) {
        return nums[bigger];
    } else if (index < bigger) {
        return topK(nums, begin, bigger - 1, index);
    } else if (index > less) {
        return topK(nums, less + 1, end, index);
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const value = topK(nums, 0, nums.length - 1, k - 1);
    return value;
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
console.log(findKthLargest(nums, k));
