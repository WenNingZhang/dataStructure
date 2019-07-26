
// 交换函数
function swap(arr, i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
}
// 构建大根堆
function heapInsert(arr, index) {
    while(arr[index] > arr[parseInt((index - 1)/2)]) {
        swap(arr, index, parseInt((index - 1)/2) )
        index = parseInt((index - 1)/2)
    }
    return arr
}

function run(nums) {
    let heapSize = 0;
    let arr = [];
    nums.forEach(num => {
        arr.push(num);
        arr = heapInsert(arr, heapSize);
        heapSize++;     // 1、堆的大小 2、下一个元素应该插入的位置
    });
    return arr;
}

const nums = [1, 0, 5, 4, 3];
let arr = run(nums);
console.log(arr)