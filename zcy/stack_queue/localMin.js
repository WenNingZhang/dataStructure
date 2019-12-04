
// 二分查找某个排好序的数组。
function binarySearch(arr, num, start, end) {
    if (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] === num) {
            return mid
        }else if (num < arr[mid]) {
            return binarySearch(arr, num, start, mid)
        } else {
            return binarySearch(arr, num, mid + 1, end)
        }
        return -1
    }
    return -1
}


const arr = [1,2,3,5,7,8,9,10]
const num = 5
console.log('binarySearch ===>: ', binarySearch(arr, num, 0, arr.length -1))

// 这个是局部最大的计算
function localMin(arr) {
    const length = arr.length
    if (length === 1) {
        return 0
    }
    // 判断第一个
    if (arr[0] > arr[1]) {
        return 0
    }
    // 判断最后一个，如果是局部最小值，直接返回
    if (arr[length-1] > arr[length - 2]) {
        return length -1
    }

    // 第一个和最后一个都不是局部最大值
    const __binarySearch = (arr, start, end) => {
        const mid = Math.floor((start + end) /2)
        if (arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) {
            return mid
        }else if (arr[mid] > arr[mid + 1]) {
            return __binarySearch(arr, start, mid -1)
        } else {
            return __binarySearch(arr, mid + 1, end)
        }
    }

    const value = __binarySearch(arr, 0 ,arr.length -1)

    return value
}

const __arr = [1,2,1,3,5,6,4]
console.log('localMin(局部最大值) ===>: ', localMin(__arr))
