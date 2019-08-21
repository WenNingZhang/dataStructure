function ways(coins, aim) {
    return _process(coins, 0, aim)
}

// 现在找出一种使用钱数最少的方法
/**
 * 从 index 出发往后的coins可以组成rest这么多钱。总共有多少种方法
 * @param {*} coins 
 * @param {*} index 
 * @param {*} rest 
 */
function _process (coins, index, rest) {
    if (index === coins.length) {
        return rest === 0 ? 1 : 0
    }
    let ways = 0
    for(let zhang = 0; rest - zhang * coins[index] >= 0; zhang++) {
        ways += _process(coins, index + 1, rest - zhang * coins[index])
    }
    return ways
}


function dpWays(coins, aim) {
    return process1(coins, aim)
}

/**
 * 初始化二位数组
 * @param {*} rest (列)
 * @param {*} cur col(行)
 */
function __init2Array(rest, cur)  {
    let x = new Array(rest + 1)
    for (var i = 0; i < x.length; i++) {
        x[i] = Array(cur+1).fill(0);
      }
      return x
}

function process1(coins, rest) {
    const dp = __init2Array(coins.length, rest)
    dp[coins.length][0] = 1

    for(let row = coins.length - 1; row >= 0; row--) {
        for(let col = 0; col <= rest; col++) {
            for(let zhang = 0; col - coins[row] * zhang >= 0; zhang++) {
                dp[row][col] += dp[row + 1][col - coins[row] * zhang]
            }
        }
    }

    // console.log(dp)
    dp.forEach(col => {
        console.log(col.join('\t'))
    })
    return dp[0][rest]
}

const coins = [10,5,2,1]
const aim = 20
const time1 = new Date()

const _ways = ways(coins, aim)
const time2 = new Date()
console.log('==>1', time2 - time1)
console.log('===>使用暴力递归方法:', _ways)
const _dpways = dpWays(coins, aim)
const time3 = new Date()
console.log('==>2', time3 - time2)
console.log('===>使用动态规划方法:', _dpways)