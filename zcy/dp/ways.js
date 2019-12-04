
class ways {
    constructor(n, f, to, k) {
        this.n = n  // 从 1 到 n 表示总共多少步要走
        this.f = f  // 起始位置是 f
        this.to = to    // 终止位置
        this.k = k      // 剩余走多少步

        this.map = new Map()    // 傻缓存记录已经走过的路
    }

    //  暴力递归
    way1() {
        return this.__way1(this.n, this.to, this.f, this.k)
    }

    /**
     * 当前在 cur 位置，还剩rest步可以走，请返回多少种方法。
     * @param {*} n 总共是多少步数
     * @param {*} to   到达哪一步
     * @param {*} cur   当前步数是哪里
     * @param {*} rest  还剩余多少步
     */
    __way1(n, to, cur, rest) {
        //  base case 的基准条件
        if (rest === 0) {
            return cur === to ? 1 : 0
        }
        if (cur === 1) {
            return this.__way1(n, to, 2, rest -1 )
        } else if (cur === n) {
            return this.__way1(n, to, n - 1, rest - 1)
        }else {
            return this.__way1(n, to, cur - 1, rest - 1) + this.__way1(n , to, cur + 1, rest -1)
        }
    }


    //  暴力递归
    way2() {
        return this.__way2(this.n, this.to, this.f, this.k)
    }
    /**
     * 使用一个傻缓存的方法。记录已经走得位置
     * @param {*} n
     * @param {*} to
     * @param {*} cur
     * @param {*} rest
     */
    __way2(n, to, cur, rest) {
        const key = cur + '_' + rest
        if (this.map.has(key)) {
            return this.map.get(key)
        }

        //  base case 的基准条件
        if (rest === 0) {
            const value =  cur === to ? 1 : 0
            this.map.set(key, value)
        }
        let value
        if (cur === 1) {
            value =  this.__way1(n, to, 2, rest -1 )
        } else if (cur === n) {
            value =  this.__way1(n, to, n - 1, rest - 1)
        }else {
            value =  this.__way1(n, to, cur - 1, rest - 1) + this.__way1(n , to, cur + 1, rest -1)
        }
        this.map.set(key, value)
        return value
    }

    __way3(n, from, to, k) {
        const dp = __init2Array(k, n)
        console.log(dp, k, n)
        dp[0][to] = 1
        for(let row = 1; row <= k; row++) {
            for(let col = 1; col <= n; col++) {
                if (col === 1) {
                    dp[row][col] = dp[row-1][col+1]
                }else if (col === n) {
                    dp[row][col] = dp[row -1][col - 1]
                } else {
                    dp[row][col] = dp[row - 1][col+1] + dp[row -1 ][col-1]
                }
            }
        }
        return dp[k][from]
    }

    way3() {
        return this.__way3(this.n, this.f, this.to, this.k)
    }
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


const w = new ways(7, 3, 5, 4)
const ways1 = w.way1()
const way2  = w.way2()
const way3  = w.way3()
console.log('使用暴力递归方法求解: ', ways1)
console.log('使用暴力递归中的(傻方法):', way2)
console.log('使用动态规划dp: ', way3)
