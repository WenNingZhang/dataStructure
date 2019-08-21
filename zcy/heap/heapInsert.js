
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
}

function run(nums) {
     //heapSize 表示 1、堆的大小 2、下一个元素应该插入的位置
    let heapSize = 0;
    for(let i = 0; i < nums.length; i++) {
        heapInsert(nums, heapSize++);
    }
    return nums;
}

const nums = [1,10,30,4,1,2,3,4,5,56,7,7,12,11,100,20,30,40,50,60]
console.log('after heapInsert arr is:', run(nums))