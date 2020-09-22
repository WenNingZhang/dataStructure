function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            console.log('--<', prefix.length - 1, prefix)
            if (!prefix) return "";
        }
    }
    return prefix;
}


const strs = ["flower","flow","flight"]

const strs1 = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))
console.log(longestCommonPrefix(strs1))
