function swap(arr, i, j) {
    let tem = arr[i]
    arr[i] = arr[j]
    arr[j] = tem
}

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

// 构建大根堆过程
function heapInsert(arr, index) {
    while(arr[index] > arr[parseInt((index - 1) / 2)]) {
        swap(arr, index, parseInt((index - 1) /2 ))
        index = parseInt((index - 1) / 2)
    }
}

// 构建大根堆
class maxHeap {
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


module.exports = maxHeap

// const heap = new maxHeap()
// const list = [1,10,30,4,1,2,3,4,5,56,7,7,12,11,100,20,30,40,50,60]
// list.forEach(element => {
//     heap.push(element)
// });

// console.log(heap)
// console.log('弹出堆顶的元素是: ', heap.pop())
// console.log(heap)