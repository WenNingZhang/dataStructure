/**
 *  数组中两个字符串的最短距离
 * 【题目】给定一个字符串数组strs, 再给定两个字符串 str1,str2,请返回strs 中 str1 和 str2 的最小距离，如果 str1 或者 str2 为 null, 或者不在 strs中，直接返回 -1。
 * 【举例】["1", "3", "3", "3", "2", "3", "1"] str1 = "1", str2 = "2"  返回 2
 *        ["CD"] str1 = "CD" str2 = "AB" 返回 -1
 */

//  O(N) 的时间复杂度拿下
function minDistance(chars, str1, str2) {
    if (str.indexOf(str1) === -1 || str.indexOf(str2) === -1) {
        return -1
    }
    if (str1 === str2) {
        return 0
    }
    // 从左到右遍历str,用 last1 表示最近一次出现 str1 的位置，用 last2 表示最近一次出现 str2 的位置。
    // 如果遍历到str1, 那么 i - last2 的值就是当前的 str1 和左边离他最近的 str2 之间的距离。
    // 如果遍历到str2, 那么 i - last1 的值就是当前的 str2 和左边离它最近的 str1 之间的距离。
    // 用变量 min 表示这些距离的最小值。

    let last1 = -1
    let last2 = -1
    let min = Number.MAX_VALUE
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (char === str1) {
            if (last2 !== -1) {
                min = Math.min(i - last2, min)
            }
            last1 = i
        }
        if (char === str2) {
            if (last1 !== -1) {
                min = Math.min(i - last1, min)
            }
            last2 = i
        }
    }
    return min
}

let str = ["1", "3", "3", "3", "2", "3", "1"]
let str1 = "1"
let str2 = "2"
console.log(`${str1} 和 ${str2} 在 数组 ${str} 中最短距离是: `, minDistance(str, str1, str2))

console.log('================================================')
let str3 = ["CD"]
let str4 = "CD"
let str5 = "AB"
console.log(`${str3} 和 ${str4} 在 数组 ${str5} 中最短距离是: `, minDistance(str3, str4, str5))

// 进阶问题，如果查询的次数很多，如何把其时间复杂度降低为 O(1)
class Record {
    constructor(chars) {
        this.record = new Map()
        this.indexMap = new Map()
        for (let i = 0; i < chars.length; i++) {
            const curStr = chars[i];
            this.update(this.indexMap, curStr, i)
            this.indexMap.set(curStr, i)
        }
    }

    update(indexMap, str, i) {
        if (!this.record.has(str)) {
            this.record.set(str, new Map())
        }
        const strMap = this.record.get(str)
        for (let [key, index] of this.indexMap.entries()) {
            if (key !== str) {
                const lastMap = this.record.get(key)
                let curMin = i - index;
                if (strMap.has(key)) {
                    let preMin = strMap.get(key);
                    if (curMin < preMin) {
                        strMap.set(key, curMin);
                        lastMap.set(str, curMin);
                    }
                } else {
                    strMap.set(key, curMin);
                    lastMap.set(str, curMin);
                }
            }
        }
    }
}

const strArr = ["4", "2", "2", "3", "2", "2", "3", "1", "1", "3"]

let record = new Record(strArr);

console.log()
