/**
 * 异或操作
 * a ^ b 对于每个bit 位。当两个操作数对应的 bit 位有且只有一个为 1 时。结果为 1 。否则就为 0
 *
 *  问题的简单版本: 一个数组中除了一个数字之外，其他数字都出现了两次。
 *  因为任意两个相等的数值取异或操作后，都为 0
 **/


function __search(nums) {
    return nums.reduce((result, cur) => {
        return result ^ cur
    })
}


const nums = [1, 20, 20]

console.log(__search(nums))


/**
 * plus 版本
 * 一个整形数组中除了两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字
 * 要求时间复杂度是 O(N)。空间复杂度是 O(1)
 **/

function findNumsAppearOnce(arr) {
    let num = arr.reduce((result, item) => {
        return result ^ item
    })

    // 找到num 中第一个值是 1 的数位置在哪
    let index = 0
    while ((num & 1) === 0) {
        num = num >> 1
        index++
    }

    let value1, value2 = [0,0]

    for(let i = 0; i < arr.length; i++) {
        if (isal(arr[i], index)) {
            value1 ^= arr[i]
        }else {
            value2 ^= arr[i]
        }
    }

    return { value1 ,value2 }


    /**
     * 判断数 i 在 index 位置的数是否为1
     * @param
     * @param index
     * @returns {boolean}
     */
    function isal(i, index) {
        i = i >> index
        return (i & 1) === 1
    }



}

const nums1 = [1,1,2,4,5,4,5,3]
console.log(findNumsAppearOnce(nums1))
