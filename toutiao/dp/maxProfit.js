/**
 * 定义两个变量，需要数组中两个值的最大差值，并且必须是后面的那个大于前面的那个。
 * @param prices
 * @returns {number}
 */
function maxProfit(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if ((prices[j] - prices[i]) > maxProfit) {
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    return maxProfit;
}

function maxProfit1(prices) {
    let minprice = Number.MAX_SAFE_INTEGER;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {

        // 用 minprice 表示以往遍历中的最小的一个数。也就是最低价格
        if (prices[i] < minprice)
            minprice = prices[i];
        else if (prices[i] - minprice > maxprofit)
            maxprofit = prices[i] - minprice;
    }
    return maxprofit;
}

let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
console.log(maxProfit1(prices));
