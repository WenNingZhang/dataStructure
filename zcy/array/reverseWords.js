/**
 *
 给定一个字符串，逐个翻转字符串中的每个单词。

 示例 1：

 输入: "the sky is blue"
 输出: "blue is sky the"
 示例 2：

 输入: "  hello world!  "
 输出: "world! hello"
 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 示例 3：

 输入: "a good   example"
 输出: "example good a"
 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
  

 说明：

 无空格字符构成一个单词。
 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
  

 进阶：

 请选用 C 语言的用户尝试使用 O(1) 额外空间复杂度的原地解法。

 翻转字符串里的单词 （遍历添加法）
 先处理字符串，将首尾空格都删除；
 倒序遍历字符串，当第一次遇到空格时，添加s[i + 1: j]（即添加一个完整单词）；
 然后，将直至下一个单词中间的空格跳过，并记录下一个单词尾部j；
 继续遍历，直至下一次遇到第一个空格，回到1.步骤；
 由于首部没有空格，因此最后需要将第一个单词加入，再return。
 python可一行实现。
 class Solution {
    public String reverseWords(String s) {
        StringBuffer res = new StringBuffer();
        s = s.trim(); // delete leading or trailing spaces.
        int i = s.length() - 1, j = s.length();
        while (i > 0) {
            if (s.charAt(i) == ' ') {
                res.append(s.substring(i + 1, j));
                res.append(' ');
                while (s.charAt(i) == ' ') i--; // ignore extra spaces between words.
                j = i + 1;
            }
            i--;
        }
        return res.append(s.substring(0, j)).toString();
    }
}
 */

function reverseWords(s) {
    let res = [];
    s = s.trim();
    let i = s.length - 1;
    let j = s.length;
    while (i > 0) {
        if (s.charAt(i) === ' ') {
            res.push(s.substring(i + 1, j));
            res.push(' ');
            while (s.charAt(i) === ' ') i--;
            j = i + 1;
        } else {
            i--;
        }
    }
    res.push(s.substring(0, j));
    return res.join('');
}

let s = "the sky is blue";
console.log(reverseWords(s));
console.log(s);

let s1 = "  hello world!  ";
console.log(reverseWords(s1));
console.log(s1);
//
let s2 = "a good       example";

console.log(reverseWords(s2));
console.log(s2);
