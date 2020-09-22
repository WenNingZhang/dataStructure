/**
 *
 * 【题目】
　　给定一个字符串str，求其中全部数字串所代表的数字之和。要求如下：
忽略小数点字符，例如“A1.3”，其中包含两个数字1和3.
如果紧贴数字子串的左侧出现字符“-”，当连续出现的数量为奇数时，则数字视为负，连续出现的数量为偶数时，则数字视为正。例如，“A-1BC- -12”，其中包含数字-1和12。
【举例】
　　str = “A1CD2E33”返回36.
　　str = “A-1B- -2C- -D6E”，返回7。
 */
function numSum(str) {
    const chars = str.split('')
    let res = 0
    let num = 0
    let posi = true // 布尔变量 posi, 如果把num 累加到 res 里面，num 是正还是负。
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i] - '0'
        // 不是数字
        if (!char) {
            res += num
            num = 0
            if (chars[i] === '-') {
                if (i - 1 > -1 && chars[i - 1] === '-') {
                    posi = !posi
                } else {
                    posi = false
                }
            } else {
                posi = true
            }
        } else {
            num = num * 10 + (posi ? char : -char)
        }
    }
    res += num
    return res
}

// console.log(numSum("A1CD2E33"))
console.log(numSum("A-12B"))
