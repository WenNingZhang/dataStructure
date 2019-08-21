/**
 * https://github.com/facert/python-data-structure-cn/tree/master/4.%E9%80%92%E5%BD%92/4.12.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92
 */

 function __process(coinValueList, change) {
    let minCoins = change
    if (coinValueList.indexOf(change) >= 0) {
        return 1
    } else {
        for(let i = 0; i < coinValueList.length; i++) {
            const coin = coinValueList[i]
            if (coin <= change) {
                const numCoins = 1 +  __process(coinValueList, change - coin)
                if (numCoins < minCoins) {
                    minCoins = numCoins
                }
            }
        }
    }
    return minCoins
 }

 const coinValueList = [1,5,10,25]
 const change = 63
 
 const date1 = new Date()
 console.log('花费最少的货币《暴力递归方法》是:', __process(coinValueList, change))

 const date2 = new Date()
 console.log('===>', date2 - date1)

 const map = new Map()
 function __foolProcess(coinValueList, change) {
    let minCoins = change
    if (coinValueList.indexOf(change) >= 0) {
        minCoins = 1
        map.set(change, minCoins)
    } else if (map.has(change)){
        minCoins = map.get(change)
    }else {
        coinValueList = coinValueList.filter(item => item <= change )
        for(let i = 0; i < coinValueList.length; i++) {
            const coin = coinValueList[i]
            const numCoins = 1 +  __foolProcess(coinValueList, change - coin)
            if (numCoins < minCoins) {
                minCoins = numCoins
            }
            map.set(change, minCoins)
        }
    }
    return minCoins
 }

 console.log('花费最少的货币《傻缓存》是:', __foolProcess(coinValueList, change))

 const date3 = new Date()
 console.log('===>', date3 - date2)
//  console.log(map)


// 根据图把动态规划图画出。
function __dp(coinValueList, change) {
    const dp = Array(change+1).fill(0)
    for(let i = 0; i <= dp.length; i++) {
        if (coinValueList.indexOf(i) >= 0) {
            dp[i] = 1
        }
    }

    for(let col = 1; col <= change; col++) {
        if (coinValueList.indexOf(col) >= 0) {
            continue
        }
        for(let j = 0; j < coinValueList.length; j++) {
            const coin = coinValueList[j]
            if (coin > col) {
                continue
            }
            if (dp[col] === 0) {
                dp[col] = 1 + dp[col-coin]
            } else {
                dp[col] = Math.min(dp[col], (1+dp[col-coin]) )
            }
        }
    }
    return dp[change]
}

const result = __dp(coinValueList, change)
const date4 = new Date()
console.log('===>', date4 - date3)

console.log('使用 dp: ', result)