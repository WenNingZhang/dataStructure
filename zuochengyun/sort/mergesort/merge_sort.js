
/**
 * 归并排序
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function run(arr, left, right) {
    if (left === right) {
        return arr[left]
    }
    const mid = Math.floor((left + right) / 2)
    run(arr, left, mid)
    run(arr, mid+1, right)
    merge(arr, left, mid, right)
    return arr
}
/**
 * merge 过程
 * @param {*} arr 
 * @param {*} left 
 * @param {*} mid 
 * @param {*} right 
 */
function merge(arr, left, mid, right) {
    const help = []
    let n = 0
    let i = left
    let j = mid + 1
    while(i <= mid && j <= right) {
        help[n++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
    }

    while(i <= mid) {
        help[n++] = arr[i++]
    }
    while(j <= right) {
        help[n++] = arr[j++]
    }
    for(let k = 0; k < help.length; k++) {
        arr[left+k] = help[k]
    }
}
const numbers = [1,10,3,2,23,40,55,20,40,4,5,6,6]
// 归并排序
console.log('the value is: ', run(numbers, 0, numbers.length - 1))