// 交换函数
function swap(arr, left, right) {
    let tem = arr[left];
    arr[left] = arr[right];
    arr[right] = tem;
}

function bubbleSort(arr) {
    if (arr == null) return
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                swap(arr, i, j);
        }
    }
}


// 测试
let arr = [1,10,3,2,23,40,55,20,40,4,5,6,6]
bubbleSort(arr)
console.log('=====>', arr)