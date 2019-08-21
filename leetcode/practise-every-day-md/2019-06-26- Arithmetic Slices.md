A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.

思路:

[1, 2, 3, 4]
 i     j 
 
设置 i,j 两个变量


const result = []
for(let i = 0; i < list.length - 2; i++) {
    for (let j = i + 2; j < list.length; j ++) {
        subList = substring(i, j + 1)
        // 判断 sub 是否为 arithmetic 
        if (isArithmetic(sub)) {
            result.push(sub)
        }
    }
}

return result.length

function isArithmetic(subList) {
    let isFlag = true
    if (!Array.isArray(subList) || subList.length < 3) {
        isFlag = false
    }
    const value = subList[1] - subList[0]
    for(let i = 1 ; i < subList.lenght - 1; i++) {
        if (subList[i + 1] - subList[i] !== value) {
            isFlag = false
            break;
        }
    } 
    
    return isFlag
}

不得不说 golang 的性能真棒，相同的代码逻辑。。。
![avatar](./assert/WX20190626-180315-arithmetic-slices.png)



