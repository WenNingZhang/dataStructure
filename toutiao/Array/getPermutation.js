
// 还没仔细看

/**
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1,  n!]。
示例 1:

输入: n = 3, k = 3
输出: "213"
示例 2:

输入: n = 4, k = 9
输出: "2314"
 */

// function getPermutation(n, k) {
//     let nums = '';
//     for (let i = 1; i <= n; i++) {
//         nums += i;
//     }
//     let factor = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
//     let answer = "";
//     let interval = n;
//     let loop_times = n;
//
//     for (let i = 0; i < loop_times; ++i) {
//         --n;
//         interval = (k - 1) / factor[n];
//         answer += nums.charAt(interval);
//         nums = nums.slice(0, interval) + nums.slice(interval + 1, nums.length);
//         k = k - interval * factor[n];
//     }
//     return answer;
// }

var getPermutation = function(n, k) {
    var ns=[]
        ,res=[]
        ,pos=k-1;
    for (var i=1;i<=n;++i) { ns.push(i); }
    console.log(ns)
    var nfac=ns.reduce((prev,curr)=>prev*curr);
    console.log(nfac)
    if (k<1||k>nfac) { return "error"; }
    for (var j=n;j>=1;--j) {
        nfac/=j;
        console.log('--->', nfac )
        let a = ns.splice(parseInt(pos/nfac),1)[0]
        console.log(a)
        res.push(a);
        pos%=nfac;
    }
    console.log(res)
    return res.join("");
};
let n = 3;
let k = 3;

console.log(getPermutation(n, k));
