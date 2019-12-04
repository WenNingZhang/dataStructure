/**
最长回文子串
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */
function isPalindromic(s) {
    let len = s.length;
    for (let i = 0; i < parseInt(len / 2); i++) {
        if (s.charAt(i) != s.charAt(len - i - 1)) {
            return false;
        }
    }
    return true;
}

// 暴力解法
function longestPalindrome(s) {
    let ans = "";
    let max = 0;
    let len = s.length;
    for (let i = 0; i < len; i++)
        for (let j = i + 1; j <= len; j++) {
            let test = s.substring(i, j);
            if (isPalindromic(test) && test.length > max) {
                ans = s.substring(i, j);
                max = Math.max(max, ans.length);
            }
        }
    return ans;
}

let a = "babad"
console.log('==>', longestPalindrome(a))