/**
 * 定义两个变量，需要数组中两个值的最大差值，并且必须是后面的那个大于前面的那个。
 * @param prices
 * @returns {number}
 */


function maxProfit(prices) {
    let maxprofits = 0
    for(let i = 0 ; i < prices.length-1; i++) {
        if (prices[i+1] - prices[i] > 0) {
            maxprofits += prices[i+1] - prices[i]
        }
    }
    return maxprofits
}


let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
