/**
 * 如上所述，只有当两个字符串包含具有相同频率的相同字符时，一个字符串才是另一个字符串的排列。我们可以考虑与 s1 长度相同的长字符串 s2 中的每个可能的子字符串，
 * 并检查出现在两者中的字符出现的频率。如果每个字母的频率完全匹配，则只有 s1s1 的排列可以是 s2s2 的子字符串。

 为了实现这种方法，我们不使用排序然后比较元素的相等性，而是使用一个哈希表 s1maps1map来存储短字符串 s1s1 中所有字符的出现频率。
 我们考虑 s2s2 的每个可能的子串，其长度与 s1s1 的长度相同，也可以找到相应的哈希表，即 s2maps2map。因此，所考虑的子字符串可以被视为一个长度窗口，
 如 s1s1 迭代超过 s2s2。如果获得的两个哈希表对于任何这样的窗口是相同的，我们可以得出结论 s1s1 的排列是 s2s2 的子字符串，否则不是。

 Java
 public class Solution {

    public boolean checkInclusion(String s1, String s2) {
        s1 = sort(s1);
        for (int i = 0; i <= s2.length() - s1.length(); i++) {
            if (s1.equals(sort(s2.substring(i, i + s1.length()))))
                return true;
        }
        return false;
    }
    public String sort(String s) {
        char[] t = s.toCharArray();
        Arrays.sort(t);
        return new String(t);
    }
}
 复杂度分析

 时间复杂度：O(l_1+26*l_1*(l_2-l_1))O(l
 1
 ​
 +26∗l
 1
 ​
 ∗(l
 2
 ​
 −l
 1
 ​
 ))。这个哈希表包含最多26个键。其中 l_1l
 1
 ​
 是字符串 l_1l
 1
 ​
 的长度，l_2l
 2
 ​
 是字符串 l_2l
 2
 ​
 的长度。
 空间复杂度：O(1)O(1)。表包含最多 26 个键值对。


 * 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。

 示例 1:

 输入: ["flower","flow","flight"]
 输出: "fl"
 示例 2:

 输入: ["dog","racecar","car"]
 输出: ""
 解释: 输入不存在公共前缀。

 * 算法

 我们可以使用更简单的数组数据结构来存储频率，而不是仅使用特殊的哈希表数据结构来存储字符出现的频率。给定字符串仅包含小写字母（'a'到'z'）。因此我们需要采用大小为 26 的数组。其余过程与最后一种方法保持一致。
 * @param s1
 * @param s2
 * @returns {boolean}
 */
function checkInclusion(s1, s2) {

    if (s1.length > s2.length) {
        return false;
    }
    let s1map = [];
    let s2map = [];
    for(let i =0 ;  i < 26; i++) {
        s1map[i] = 0
    }
    for(let i =0 ;  i < 26; i++) {
        s2map[i] = 0
    }
    for (let i = 0; i < s1.length; i++) {
        s1map[s1[i].charCodeAt() - 97]++;
    }
    console.log(s1map)
    for (let i = 0; i <= s2.length - s1.length; i++) {

        for (let j = 0; j < s1.length; j++) {
            s2map[s2[i+j].charCodeAt() - 97]++;
        }
        console.log('==>', s2map)
        if (matches(s1map, s2map))
            return true;
    }
    return false;

}


function matches(s1map, s2map) {
    for (let i = 0; i < 26; i++) {
        if (s1map[i] !== s2map[i])
            return false;
    }
    return true;
}


let s1 = "ab"
let s2 = "eidbaooo"

console.log(checkInclusion(s1, s2))

// let s3= "ab"
// let s4 = "eidboaoo"
//
// console.log(checkInclusion(s3, s4))
