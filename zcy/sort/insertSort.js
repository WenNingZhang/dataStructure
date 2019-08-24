// 交换函数
function swap(arr, left, right) {
    let tem = arr[left];
    arr[left] = arr[right];
    arr[right] = tem;
}

function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        //内层循环比较 i 与前边所有元素值，如果 j 索引所指的值小于 j- 1 则交换两者的位置
        for(let j = i; j > 0 && arr[j-1] > arr[j]; j--){
            swap(arr,j-1,j);
        }
    }
}


// 测试
let arr = [1,10,3,2,23,40,55,20,40,4,5,6,6]
insertSort(arr)
console.log('=====>', arr)