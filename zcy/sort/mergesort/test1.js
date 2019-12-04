/**
 * 给定两个数组有序的，如何使得整个数组是有序的。
 * @param num1
 * @param num2
 * @returns {Array}
 */
// function merge(num1, num2) {
//     let i = 0;  // 指向num1数组的头部
//     let j = 0;  // 指向num2数组的头部
//     let help = [];
//     let index = 0;
//
//     while (i < num1.length && j < num2.length) {
//         help[index++] = num1[i] <= num2[j] ? num1[i++] : num2[j++]
//     }
//
//     while (i<num1.length) {
//         help[index++] = num1[i++]
//     }
//     while (j < num2.length) {
//         help[index++] = num2[j++]
//     }
//     return help
// }
//
// const arr1 = [2, 3, 6, 7];
// const arr2 = [5, 7, 9, 10];
//
// console.log(merge(arr1, arr2));


// 归并排序的思想是: 先让左侧有序，然后再让右侧有序，最后通过 merge 使得整体有序。
// function run(arr, left, right) {
//     if (left === right) {
//         return arr[left]
//     }
//     const mid = Math.floor((left+ right) /2)
//     run(arr, left, mid)
//     run(arr, mid+1, right)
//     merge(arr, left, right, mid)
//     return arr
// }
//
//
//
// function merge(arr, left, right, mid) {
//     const help = []
//     let n = 0
//     let i = left
//     let j = mid+1
//
//     while (i<=mid && j <= right) {
//         help[n++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
//     }
//
//     while (i<=mid) {
//         help[n++] = arr[i++]
//     }
//     while(j <= right) {
//         help[n++] = arr[j++]
//     }
//
//     for (let i = 0; i< help.length; i++) {
//         arr[left+i] = help[i]
//     }
// }
//
// const numbers = [1,10,3,2,23,40,55,20,40,4,5,6,6]
// // 归并排序
// console.log('the value is: ', run(numbers, 0, numbers.length - 1))


// function process(arr, left, right) {
//     if (left === right) {
//         return
//     }
//     const mid = Math.floor((left+ right) /2)
//     process(arr, left, mid)
//     process(arr, mid+1, right)
//     merge(arr, left, mid, right)
//     return arr
// }
//
//
// function merge(arr, left, mid, right) {
//     let i = left  // 从left 开始往后指
//     let j = mid+1   // 从mid 开始往后指
//     let help = []
//     let index = 0
//
//     while (i <= mid && j <= right) {
//         help[index++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
//     }
//
//     while (i<=mid) {
//         help[index++] = arr[i++]
//     }
//
//     while (j<=right) {
//         help[index++] = arr[j++]
//     }
//
//     for(let i = 0; i < help.length; i++) {
//         arr[left+i] = help[i]
//     }
//
//     return arr
//
// }
//
// /**
//  * 归并排序的是O(NlogN)。因为可以写成 T(N) = T(N/2) + O(N)
//  * @type {number[]}
//  */
//
// const numbers = [1,10,3,2,23,40,55,20,40,4,5,6,6]
// // 归并排序
// console.log('the value is: ', process(numbers, 0, numbers.length - 1))
