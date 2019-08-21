/**
	给你一个数组 arr。和一个num。要求大于 num 在左边,等于 num 在中间，小于 num 的在右边
	要求时间复杂度是 O(N)。空间复杂度是 O(1)
**/

// 交换函数
function swap(arr, left, right) {
    let tem = arr[left];
    arr[left] = arr[right];
    arr[right] = tem;
}

/**
*	1、把数组分成 < 区和待分配区
*	2、比较num和待分配区的大小(i)
		i < num 	把 i 和 < 区的下一个树交换，同时 < 区往前一个， i 挑一格
		i >= num 	i 挑一格
	3、把待分配区循环完成
*/
function __exec(arr, num) {
	let i = 0;
	let less = i - 1
	let more = arr.length

	while(i < more) {
		if (arr[i] < num) {
			swap(arr, ++less, i++)
		}else if (arr[i] > num){
			swap(arr, --more, i)		
		} else {
			// 这个是相等的情况，直接往下跳
			i++
		}
	}
	return arr
}

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// partition(分区)
let arr = [1,10,3,2,23,40,55,20,40,4,5,6,6,9]
let num = 23
console.log('=====>', __exec(arr, num))
