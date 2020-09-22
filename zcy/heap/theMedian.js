const maxHeap = require('./maxHeap')
const minHeap = require('./minHeap')


function modifyTwoHeap(max, min) {
    if (max.size() > min.size() + 1) {
        const value = max.pop()
        min.push(value)
    }
    if (min.size() > max.size() + 1) {
        const value = min.pop()
        max.push(value)
    }
}

function getMedian(max, min) {
    if (max.size() !== min.size()) {
        return max.size() > min.size() ? max.peek() : min.peek()
    }
    return (max.peek() + min.peek()) / 2
}

function run(nums) {
    const max = new maxHeap()
    const min = new minHeap()

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (max.empty()) {
            max.push(element)
        } else {
            if (element <= max.peek()) {
                max.push(element)
            }else {
                min.push(element)
            }
            modifyTwoHeap(max, min)
        }
    }

    const value = getMedian(max, min)
    return value
}

const arr = [1,10,30,4,1,2,3,4,5,56,7,7,12,11,100,20,30,40,50,60,20]

console.log(`${arr} the median is :`, run(arr))
