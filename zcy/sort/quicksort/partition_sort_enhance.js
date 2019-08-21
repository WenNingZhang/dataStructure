
// 快速排序方法
function process(arr, left, right) {
	if (!arr || arr.length < 2) {
		return 
	}

	if (left < right) {
		// 增加排序的随机性，使得时间复杂度降低到 O(NlogN)
		swap(arr, right, arr[Math.floor(Math.random() * (arr.length - 1))])
		let result = partition(arr, left, right)
		process(arr, left, result[0]-1)
		process(arr, result[1] + 1, right)
		return arr
	}
}

// 交换函数
function swap(arr, left, right) {
    let tem = arr[left];
    arr[left] = arr[right];
    arr[right] = tem;
}


// 分区
function partition(arr, left, right) {
	let i = left
	let less = left - 1
	let more = right 
	
	while(i < more)	 {
		if (arr[i] < arr[right]) {
			swap(arr, ++less, i++)
		} else if (arr[i] > arr[right]) {
			swap(arr, --more, i)
		}else {
			i++
		}
	}
	swap(arr, right, more)
	return [less+1, more]
}

let arr = [1,10,3,2,23,40,55,20,40,4,5,6,6,9]
console.log('=====>', process(arr, 0, arr.length - 1))

