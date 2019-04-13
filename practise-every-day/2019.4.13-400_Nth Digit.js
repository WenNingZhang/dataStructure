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
