
// 交换函数
function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}

// 构建大根堆过程
function add(arr, index) {
    while(arr[index] > arr[parseInt((index - 1) / 2)]) {
        swap(arr, index, parseInt((index - 1) /2 ))
        index = parseInt((index - 1) / 2)
    }
}

/**
 * 
 * @param {*} arr 堆数组
 * @param {*} i 需要调整的堆位置
 * @param {*} heapSize 1、堆大小    2、待插入元素的位置
 */
function heapify(arr, i, heapSize) {
    let lc = i * 2 + 1
    while(lc < heapSize) {
        let rc = lc + 1
        let largest = rc < heapSize && arr[rc] > arr[lc] ? rc : lc
        largest = arr[largest] > arr[i] ? largest : i
        if (largest === i) {
            break
        }
        swap(arr, i, largest)
        i = largest
        lc = i * 2 + 1
    }
}

function run (nums) {
    let heapSize = 0
    let arr = []
    nums.forEach(element => {
        arr.push(element)
        add(arr, heapSize++)
    });

    while(heapSize > 0) {
        swap(arr, 0, --heapSize)
        heapify(arr, 0, heapSize)
    }
    console.log('use heap sort is :', arr)
}

const nums = [1,10,30,4,1,2,3,4,5,56,7,7,12,11,100,20,30,40,50,60]
run(nums)