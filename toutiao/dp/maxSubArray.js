function maxSubArray(list) {
    let tmp = list[0];  // 一个记录当前和
    let max_ = tmp; // 一个记录最大和

    n = list.length;
    for (let i = 1; i < n; i++) {
        // # 当前序列加上此时的元素的值大于tmp的值，说明最大序列和可能出现在后续序列中，记录此时的最大值
        if (tmp + list[i] > list[i]) {
            max_ = Math.max(max_, tmp + list[i]);
            tmp = tmp + list[i];
        } else {
            // #当tmp(当前和)小于下一个元素时，当前最长序列到此为止。以该元素为起点继续找最大子序列,
            //         # 并记录此时的最大值
            max_ = Math.max(max_, tmp, tmp + list[i], list[i]);
            tmp = list[i];
        }
    }

    return max_;
}

// -2, 1, -3, 4, -1, 2, 1, -5, 4
// tmp = -2 max_ = -2 n = 9
// -2 + 1 > 1 max_ = 1 tmp = 1
//
// let list = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let list = [1,2,3,-4]

console.log(maxSubArray(list));
