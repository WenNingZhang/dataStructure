/**
 * 给定一个只包含数字的字符串，复原它并且返回所有可能的 Ip 地址
 * 示例:
 输入: "25525511135"
 输出: ["255.255.11.135", "255.255.111.35"]
 * @param s
 */
function restoreIpAddresses(s) {
    const res = []
    const n = s.length
    console.log(n)
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < i + 4; j++) {
            for (let k = j + 1; k < j + 4; k++) {
                if (i < n && j < n && k < n) {
                    let tmp1 = s.substring(0, i + 1);
                    let tmp2 = s.substring(i + 1, j + 1);
                    let tmp3 = s.substring(j + 1, k + 1);
                    let tmp4 = s.substring(k + 1);
                    if (helper(tmp1) && helper(tmp2) && helper(tmp3) && helper(tmp4))
                        res.push(tmp1 + "." + tmp2 + "." + tmp3 + "." + tmp4);
                }
            }
        }
    }
    return res;
}


function helper(tmp) {
    if (tmp === null || tmp.length === 0 || tmp.length > 3 || (tmp.charAt(0) === '0' && tmp.length > 1) || parseInt(tmp) > 255)
        return false;
    return true;
}

let s = "25525511135"
console.log(restoreIpAddresses(s))
