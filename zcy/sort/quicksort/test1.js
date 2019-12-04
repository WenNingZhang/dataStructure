// 交换函数
function swap(arr, left, right) {
    let tem = arr[left];
    arr[left] = arr[right];
    arr[right] = tem;
}

function process(arr, left, right) {
    if (!arr || arr.length < 2) {
        return
    }
    if (left < right) {
        // swap(arr, right, arr[Math.floor(Math.random() * (arr.length -1 ))])
        // let index = Math.floor(Math.random() * (arr.length - 1))
        // console.log(index, right)
        // swap(arr, right, index)
        const result = partition(arr, left, right)
        process(arr, left, result[0] -1)
        process(arr, result[1] + 1, right)
        return arr
    }
}


function partition(arr, left, right) {
    let i = left
    let less = left - 1
    let more = right

    while (i < more) {
        if (arr[i] < arr[right]) {
            swap(arr, i++, ++less)
        }else if(arr[i] > arr[right]) {
            swap(arr, i, --more)
        }else {
            i++
        }
    }
    swap(arr, more, right)
    return [less+1, more]
}


// 经典快排会出现最坏情况。
/**
 * 优化
 * 1、在哨兵处增加随机性，可以使得快排的时间复杂度缩短到O(NlogN)
 * 2、partition 时使用荷兰国旗的方式分成三段分区。
 * 3、快排数量较少时，使用其他普通的方式。在快排的过程中使用其他快排的方式。
 * @type {number[]}
 */
let arr = [ 1, 6, 3, 2, 5, 4, 40, 20, 6, 23, 10, 55, 40 ]
console.log('=====>', process(arr, 0, arr.length - 1));
