const path = require('path')
const fs = require('fs')

const pathToFile = path.resolve(__dirname, './text')
// fs.readFile(pathToFile, 'utf-8', function (err, result) {
//     if (err) {
//         console.log('error', err)
//         return errr
//     }
//     console.log('比下边的慢，显示结果', result)
// });
//异步
const result = fs.readFileSync(pathToFile, 'utf-8')
console.log('sync result 显示结果比上边的快', result)//异步先打印

//借用promise 把函数变成promise
function promiseFs(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            //这里是readFile的参数的最后一个回调函数的参数
            args.push(function (err, result) {
                if (err) return reject(err)
                return resolve(result)
            })
            return func.apply(this, args)
        })
    }
}
const promiseFile = promiseFs(fs.readFile)
//模拟readFile
promiseFile(pathToFile, 'utf-8')
    .then(result => {
        console.log('promiseFile', result)
    }).catch(e => console.log(e))

