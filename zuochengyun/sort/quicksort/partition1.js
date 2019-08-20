/**
	给你一个数组 arr。和一个num。要求大于 num 在左边，小于 num 的在右边。
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
	while(i < arr.length) {
		if (arr[i] < num) {
			swap(arr, ++less, i++)
		}else {
			i++
		}
	}
	return arr
}

// 测试
let arr = [1,10,3,2,23,40,55,20,40,4,5,6,6]
let num = 20
console.log('=====>', __exec(arr, num))
