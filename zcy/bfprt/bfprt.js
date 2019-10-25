
function getMinKNumsByBFPRT(arr, k) {
    if (k < 1 || k > arr.length) {
        return arr;
    }

    let minKth = getMinKthByBFPRT(arr, k);

    console.log('===>', minKth)
    // int[] res = new int[k];
    // int index = 0;
    // for (int i = 0; i != arr.length; i++) {
    //     if (arr[i] < minKth) {
    //         res[index++] = arr[i];
    //     }
    // }
    // for (; index != res.length; index++) {
    //     res[index] = minKth;
    // }
    // return res;
}

function getMinKthByBFPRT(arr, k) {
    console.log('===>', arr, 0, arr.length - 1,k- 1)
    return select(arr, 0, arr.length - 1,k- 1);
}

/**
 * arr[begin...end] begin <= i <= end
 * @param arr
 * @param begin
 * @param end
 * @param i
 * @returns {*}
 */
function select(arr, begin, end, i) {
    if (begin === end) {
        return arr[begin];
    }
    let pivot = medianOfMedians(arr, begin, end);
    console.log('==>', pivot)
    let {small, big} =  partition(arr, begin, end, pivot);
    if (i >= small && i <= big) {
        return arr[i];
    } else if (i < small) {
        return select(arr, begin, small - 1, i);
    } else {
        return select(arr, big + 1, end, i);
    }
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

function medianOfMedians(arr,begin,end) {
    let num = end - begin + 1;
    let offset = num % 5 === 0 ? 0 : 1;
    let length = num / 5 + offset
    let mArr = []
    for(let i =0 ; i < length; i++) {
        mArr[i] = i
    }
    console.log('===>', mArr)
    for (let  i = 0; i < mArr.length; i++) {
        let beginI = begin + i * 5;
        let endI = beginI + 4;
        mArr[i] = getMedian(arr, beginI, Math.min(end, endI));
    }
    console.log('==>', mArr)
    return select(mArr, 0, mArr.length - 1, mArr.length / 2);
}

function getMedian(arr, begin, end) {
    console.log('===')
    insertionSort(arr, begin, end);
    // Array.sort(arr)
    let sum = end + begin;
    let mid = parseInt(sum / 2) + parseInt(sum % 2);
    console.log('####', mid, arr[mid])
    return arr[mid];
}


function insertionSort(arr, begin, end) {
    for (let i = begin + 1; i !== end + 1; i++) {
        for (let j = i; j !== begin; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            } else {
                break;
            }
        }
    }
}
// 交换函数
function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}

const nums = [6, 9, 1, 3, 1, 2, 2, 5, 6, 1, 3, 5, 9, 7, 2, 5, 6, 1, 9];
// sorted : { 1, 1, 1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 6, 6, 6, 7, 9, 9, 9 }
// console.log(nums);
console.log('use bfprt get value:', getMinKNumsByBFPRT(nums, 10))
