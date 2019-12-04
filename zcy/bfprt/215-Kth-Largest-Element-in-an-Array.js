/**
 * 215. Kth Largest Element in an Array
 **/

function swap(arr, i, j) {
    let tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}
// [3,2,1,5,6,4]
function partition(arr, begin, end) {
    let big = begin - 1;
    let small = end;
    let cur = begin;
    while (cur < small) {
        if (arr[cur] < arr[end]) {
            swap(arr, cur, --small);
        } else if (arr[cur] > arr[end]) {
            swap(arr, cur++, ++big);
        } else {
            cur++;
        }
    }
    swap(arr, small, end);
    return {
        small: small,
        big: big + 1
    };
}

function topK(arr, begin, end, i) {
    if (begin === end) {
        return arr[begin];
    }
    let {small, big} = partition(arr, begin, end);

    if (i >= small && i <= big) {
        return arr[i];
    } else if (i < small) {
        return topK(arr, begin, small - 1, i);
    } else {
        return topK(arr, big + 1, end, i);
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const value = topK(nums, 0, nums.length - 1, k - 1)
    return value
};

const nums = [3,2,3,1,2,4,5,5,6]
const k = 4
console.log(findKthLargest(nums, k))
