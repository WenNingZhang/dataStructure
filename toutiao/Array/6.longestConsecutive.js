
/**
 *
 * 给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

// https://leetcode.com/problems/longest-consecutive-sequence/discuss/41057/Simple-O(n)-with-Explanation-Just-walk-each-streak
输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * @param {*} nums
 */
function longestConsecutive(nums) {
    let set = new Set()
    nums.forEach(element => {
        set.add(element)
    });
    let max = 0
    for(let x of set) {
        // 如果 x 是连续子序列的开始。即 x -1 不在连续子序列中
        if (!set.has(x-1)) {
            let y = x + 1
            while(set.has(y)) {
                y++
            }
            max = Math.max(y - x, max)
        }
    }
    return max
}

let list = [100, 4, 200, 1, 3, 2];
console.log('==>', longestConsecutive(list));
