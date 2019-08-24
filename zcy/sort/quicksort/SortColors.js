/**
 * https://leetcode.com/problems/sort-colors/
 */

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
function __exec(arr) {
	let i = 0;
	let less = i - 1
    let more = arr.length
    const num = 1

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

console.log(__exec([2,0,2,1,1,0]))