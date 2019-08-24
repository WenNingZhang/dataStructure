// 交换函数
function swap(arr, left, right) {
    let tem = arr[left];
    arr[left] = arr[right];
    arr[right] = tem;
}

function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        // for 循环 i 之后所有的数字 找到剩余数组中最小值得索引
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j]< arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex)
    }
}


// 测试
let arr = [1,10,3,2,23,40,55,20,40,4,5,6,6]
selectSort(arr)
console.log('=====>', arr)