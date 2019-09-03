/**
 * heapify 化
 * @param {*} arr 
 * @param {*} i heapify 的位置
 * @param {*} heapSize 1、堆大小 2、堆中新加的值放的地方
 */
function heapify(arr, i, heapSize) {
    let lc = i * 2 + 1
    while(lc < heapSize) {
        let rc = lc + 1
        let smallest = rc < heapSize && arr[rc].weight < arr[lc].weight ? rc : lc
        smallest = arr[smallest].weight < arr[i].weight ? smallest : i
        if (smallest === i) {
            break
        }
        swap(arr, i, smallest)
        i = smallest
        lc = i * 2 + 1
    }
}


// 交换函数
function swap(arr, i, j) {
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}

// 构建小根堆过程
function heapInsert(arr, index) {
    while(arr[index].weight < arr[parseInt((index - 1) / 2)].weight) {
        swap(arr, index, parseInt((index - 1) /2 ))
        index = parseInt((index - 1) / 2)
    }
}

// 构建小根堆
class minHeap {
    constructor() {
        this.heap = []
        this.heapSize = 0
    }

    push(value) {
        this.heap.push(value)
        heapInsert(this.heap, this.heapSize++)
    }

    pop() {
        const value = this.heap[0]
        this.heap[0] = this.heap[this.heapSize - 1]
        this.heap.pop()
        heapify(this.heap, 0, --this.heapSize)
        return value
    }

    empty() {
        return this.heapSize === 0
    }

    size() {
        return this.heapSize
    }

    peek() {
        return this.heap[0]
    }
}

module.exports = minHeap