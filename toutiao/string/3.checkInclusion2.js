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

**/

function checkInclusion(s1, s2) {
    s1 = sort(s1);
    for (let i = 0; i <= s2.length - s1.length; i++) {
            console.log('----->', s1, sort(s2.substring(i, i + s1.length)), i, i + s1.length)
        if (s1 === sort(s2.substring(i, i + s1.length))) {
            return true;
        }
    }
    return false;
}

function sort(s) {
    let strs = s.split("")
    strs.sort()
    return strs.join("")
}

let s1 = "adc"
let s2 = "dcda"

console.log(checkInclusion(s1, s2))

console.log(s1, s2)

// let s3= "ab"
// let s4 = "eidboaoo"
//
// console.log(checkInclusion(s3, s4))
