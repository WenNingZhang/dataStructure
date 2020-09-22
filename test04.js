function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            args.push(function (err, res) {
                if (err) reject(err)
                resolve(res)
            })
            fn.apply(null, args)
        })
    }
}


const fs = require('fs')
const readFile = promisify(fs.readFile)

readFile('./package.json').then((res) => console.log(res.toString()))
