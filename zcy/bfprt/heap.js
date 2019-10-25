// 从小到大排序，最小的 top k 的数值是哪个？ 比如 top 16 那个数值是哪个？
// 使用堆的思想计算 top K 的问题
// 现在面临的 堆问题 只能找到 top k 个数，但是却找不到 第 k 个大小的值。
// 交换函数
function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}

// 构建大根堆过程
function heapInsert(arr, value, index) {
    arr[index] = value;
    while (index !== 0) {
        let parent = parseInt((index - 1) / 2);
        if (arr[parent] < arr[index]) {
            swap(arr, parent, index);
            index = parent;
        } else {
            break;
        }
    }
}

/**
 *
 * @param {*} arr 堆数组
 * @param {*} i 需要调整的堆位置
 * @param {*} heapSize 1、堆大小    2、待插入元素的位置
 */
function heapify(arr, i, heapSize) {
    let lc = i * 2 + 1;
    while (lc < heapSize) {
        let rc = lc + 1;
        let largest = rc < heapSize && arr[rc] > arr[lc] ? rc : lc;
        largest = arr[largest] > arr[i] ? largest : i;
        if (largest === i) {
            break;
        }
        swap(arr, i, largest);
        i = largest;
        lc = i * 2 + 1;
    }
}

function getMinKNumsByHeap(arr, k) {
    let kHeap = [];
    for (let i = 0; i !== k; i++) {
        heapInsert(kHeap, arr[i], i);
    }
    for (let i = k; i !== arr.length; i++) {
        if (arr[i] < kHeap[0]) {
            kHeap[0] = arr[i];
            heapify(kHeap, 0, k);
        }
    }
    return kHeap;
}

const nums = [6, 9, 1, 3, 1, 2, 2, 5, 6, 1, 3, 5, 9, 7, 2, 5, 6, 1, 9];
// sorted : { 1, 1, 1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 6, 6, 6, 7, 9, 9, 9 }

const k = 16;
const topK = getMinKNumsByHeap(nums, k);
console.log('use heap idea is :', topK[0]);
console.log('the topK value is ', topK);
