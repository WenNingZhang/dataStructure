// 编程题：KOA洋葱圈中间件模型
// 实现一个中间件组合函数compose，接口格式如下：

/**
 * 中间件组合函数
 *
 * @param {Array<Middleware>} middlewares - 中间件数组
 * @return {ComposedMiddleware} - 组合后的中间件
 */
function compose(middlewares) {
    return async function() {
        if (Array.isArray(middlewares) && middlewares.length) {
            const ctx = {}
            async function run(i) {
                if (i >= middlewares.length) return
                const midd = middlewares[i]
                if (typeof midd === 'function') {
                    return await midd(ctx, run.bind(null, i+1))
                }
            }
            await run(0)
        }
    }
}
// 要求达到如下效果：
const middleware1 = async (ctx, next) => {
    console.log('middleware1: start');
    await next();
    console.log('middleware1: end');
}

const middleware2 = async (ctx, next) => {
    console.log('middleware2: start');
    await next();
    console.log('middleware2: end');
}

const middleware3 = async (ctx, next) => {
    console.log('middleware3: start');
    await next();
    console.log('middleware3: end');
}

const ctx = {};
const composedMiddleware = compose([middleware1, middleware2, middleware3]);


// console.log("---->", composedMiddleware().then())

composedMiddleware().then(() => {
    console.log('done');
});

// 输出
// middleware1: start
// middleware2: start
// middleware3: start
// middleware3: end
// middleware2: end
// middleware1: end
// done
