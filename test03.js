/**
 * 每个对象都有一个 __proto 属性，指向创建该对象函数的 prototype
 * 每个对象都一个 __proto__ 属性，指向创建该对象函数的 prototype 属性
 **/



//异步函数promise化
function promisify(fn) {
    return function () {
        var args = []
        console.log('---->', args)
        return new Promise(function (resolve, reject) {
            args.push(function (err, result) {
                if (err) reject(err)
                else resolve(result);
            });
            fn.apply(null, args);
        })
    }
}


//异步接口：返回当天总注册用户数
function test(callback) {
    console.log('--->', callback)
    setTimeout(() => {
        callback(null, 'a')
    },1000)
};

let a = promisify(test)
a().then(result => {console.log(result)})
