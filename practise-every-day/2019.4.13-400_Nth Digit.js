/**
 * Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

 Note:
 n is positive and will fit within the range of a 32-bit signed integer (n < 231).

 Example 1:

 Input:
 3

 Output:
 3
 Example 2:

 Input:
 11

 Output:
 0

 Explanation:
 The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0,
 which is part of the number 10.
 **/

// 第一种使用野蛮暴力方法，直接遍历从 1 到 2^31
function run(n) {
    let len = 1
    let count = 9
    let start = 1

    // 找出第n个数字所在的数字的长度
    while (n > len * count) {
        n -= len * count
        len++
        count *= 10
        start *= 10
    }
//  找出第n个数所在的数字
    let number = start + (n-1)/len

    number = number.toString()

    return number.charAt((n-1)%len)

}

let a = run(100)

console.log(a)

/**
 * 这道题开始的时候题目就没理解清楚，还是通过baidu上查看汉语题目理解的。以后英语的理解力还是要加强的啊。汗颜
 * 在一个有序数列中寻找给定的第 n 位。
 * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
 * Example。查找第 11 位就是 0
 * 解题思路
 * 1、找出第 n 个数字所在的数字的长度
 * 2、找出第 n 个数字所在的数字
 * 3、找到第 n 为并且返回
 **/
