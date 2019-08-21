// 交换函数
function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}
/**
 * @param arr
 * @param i 需要调整的堆位置
 * @param heapSize 1、堆大小    2、待插入元素的位置
 * @returns {*}
 */
function heapify(arr, i, heapSize) {
    let lc = i * 2 + 1;
    while (lc < heapSize) {
        let rc = lc + 1;
        // 左右两个孩子跳出最大值
        let largest = rc < heapSize && arr[rc] > arr[lc] ? rc : lc;
        //  左、右孩子较大的和 i 进行比较
        largest = arr[i] > arr[largest] ? i : largest;
        if (largest === i) {
            break;
        }
        swap(arr, largest, i);
        i = largest;
        lc = i * 2 + 1;
    }
    return arr;
}

function run(arr) {
    const value = arr[0]
    arr[0] = arr[arr.length - 1]
    arr.pop()
    heapify(arr, 0, arr.length)
    return { arr, value }
}

const arr = [5, 4, 1, 0, 3];
console.log('the Array is :', arr)
console.log('after heapify is: ', run(arr))