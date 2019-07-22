

// 快速排序方法
function process(arr, left, right) {
	if (!arr || arr.length < 2) {
		return 
	}

	if (left < right) {
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
	console.error(arr, left, right, less+1, more)
	
	return [less+1, more]

}

let arr = [1,10,3,2]
console.log('=====>', process(arr, 0, arr.length - 1))

