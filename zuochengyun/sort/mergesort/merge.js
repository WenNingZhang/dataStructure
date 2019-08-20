
function merge(arr1, arr2) {
    const help = []
    let n = 0
    let i = 0     // 指向arr1数组
    let j = 0     // 指向arr2数组

    while(i<arr1.length && j < arr2.length) {
        help[n++] = arr1[i] <= arr2[j]   ?   arr1[i++]    :   arr2[j++]
    }
    while (i < arr1.length) {
        help[n++] = arr1[i++]
    }
    while (j < arr2.length) {
        help[n++] = arr2[j++]
    }
    return help
}


const arr1 = [2,3,6,7]
const arr2 = [5,7,9,10]

console.log(merge(arr1, arr2))