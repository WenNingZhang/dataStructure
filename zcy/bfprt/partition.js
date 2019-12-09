
// 使用 partition 思想找到第 k 大的数值。
function swap(arr, i, j) {
    let tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}

function partition(arr, begin, end) {
    let small = begin - 1;
    let big = end;
    let cur = begin;
    while (cur < big) {
        if (arr[cur] < arr[end]) {
            swap(arr, ++small, cur++);
        } else if (arr[cur] > arr[end]) {
            swap(arr, cur, --big);
        } else {
            cur++;
        }
    }
    swap(arr, big, end);
    // 在这个分区中
    return {
        small: small + 1,
        big: big
    };
}

/**
 * 找到第 k 大的数据
 * 分析: 如果从小到大进行排序，第 k 大的数就是第(k-1)位置上的数。
 * @param A
 * @param low
 * @param high
 * @returns {*}
 */
function topK(arr, begin, end, i) {
    if (begin >= end) {
        return -1;
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

// const nums = [6, 9, 1, 3, 1, 2, 2, 5, 6, 1, 3, 5, 9, 7, 2, 5, 6, 1, 9];
// sorted : { 1, 1, 1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 6, 6, 6, 7, 9, 9, 9 }

const nums = [3,2,1,5,6,4]
const k = 2;
const kValue = topK(nums, 0, nums.length - 1, nums.length - k);
console.log('use partition :', kValue);
// console.log(nums);
