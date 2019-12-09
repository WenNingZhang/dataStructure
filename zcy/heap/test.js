/**
 * 完全二叉树。每一层要么是满的，要么从左到右依次变满。
 * 堆就是一课完全二叉树，除了有完全二叉树的特性外，对于堆，任何一个节点为头的子树的最大值是头节点自己
 **/

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


/**
 * heapify 调整成大根堆
 * @param arr
 * @param i     待调整元素的位置
 * @param heapSize  1、表示堆的大小    2、下一个入堆中待插入元素的位置
 * @returns {*}
 */
function heapify(arr, i, heapSize) {
    let lc = i * 2 + 1;
    while (lc < heapSize) {
        let rc = lc + 1;
        let largetst = rc < heapSize && arr[rc] > arr[lc] ? rc : lc;
        largetst = arr[i] > arr[largetst] ? i : largetst;
        if (i === largetst) {
            break;
        }
        swap(arr, i, largetst);
        i = largetst;
        lc = i * 2 + 1;
    }
    return arr;
}

// 构建大根堆的过程
function heapInsert(arr, index) {
    while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
        swap(arr, index, Math.floor((index - 1) / 2));
        index = Math.floor((index - 1) / 2);
    }
}



function run(nums) {
    let heapSize = 0
    nums.forEach(num => {
        // heapInsert 是插入操作，是从下面往上面依次heapInsert.是往上冒的操作
        heapInsert(nums, heapSize++)
    })

    while (heapSize >0 ) {
        swap(nums, 0, --heapSize)
        heapify(nums, 0, heapSize)
    }
    console.log(nums)
}

const nums = [1,10,30,4,1,2,3,4,5,56,7,7,12,11,100,20,30,40,50,60]
console.log('use heap sort is :', run(nums))
