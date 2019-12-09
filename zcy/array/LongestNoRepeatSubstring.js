// 找到字符串最长无重复字符子串的长度
// 比如字符串是abcd 返回4; 比如字符串是 aabca，最长无重复子串是 abc; 返回3

// 看到子串问题，想比如以i结尾或者开头的时，怎么怎么样？

// 当以i位置的字符结尾时，最长无重复字符子串的长度是多少?

// 用张Map表表示最近之前出现的字符列表。当第 i 位置的字符是 A 时, (i-1)是i位置的前一个位置， pre 表示必须str[i-1]字符结尾的情况下，最长无重复字符子串开始位置的前一个位置。初始时为 -1。
// pre 表示必须str[i-1]字符结尾的情况下，最长无重复字符的子串开始位置的前一个位置。初始时为 -1。
// 整形变量len，记录以每一个字符结尾的情况下，最长无重复字符子串长度的最大值。初始时,len = 0。
// map表 中 key 表示每个字符，value 为这个字符最近一次出现的位置。
//
// 最长无重复子串的长度是
function maxUnique(str) {
    const chars = str.split('')
    const map = { }
    for (let i = 0; i < chars.length; i++) {
        map[chars[i]] = -1;
    }
    let len = 0;
    let pre = -1;
    let curLen = 0;
    for (let i = 0; i !== chars.length; i++) {
        pre = Math.max(pre, map[chars[i]]);
        curLen = i - pre;
        len = Math.max(len, curLen);
        map[chars[i]] = i;
    }
    console.log(map)
    return len;
}

console.log(maxUnique("abcd"))
// console.log(maxUnique("aabca"))
// console.log(maxUnique("aaaa"))
