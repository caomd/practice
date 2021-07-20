function longTimeFun(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time);
        }, time)
    })
}
next 的调用数比 yield 的调用数多 1;
第一个 next 传参无效, 从第二个 next 开始传参有效并会作为 yield 的结果返回;
生成器中的 yield / next 除了控制能力外还有双向的消息通知能力:
yield 后面跟的值能通过 it.next().value 取到
it.next() 括号中的值又能作为 yield 的结果返回
next 方法的参数
yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，
该参数就会被当作上一个yield表达式的返回值。

function asyncFunction(generator) {
    const iterator = generator();
    const next = (data) => {
        const { value, done } = iterator.next(data);
        if (done) {
            return;
        }
        value.then(data => {
            next(data);
        })
    }
    next();
}

asyncFunction(function* () {
    let data = yield longTimeFun(2000);
    console.log(data);
    data = yield longTimeFun(2000);
    console.log(data);
    return data;
})

async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。
async / await 的特点
可以让异步逻辑用同步写法实现
最底层的await返回需要是Promise对象
可以通过多层 async function 的同步写法代替传统的callback嵌套

async await 实现同步
var fetch = require("node-fetch");
function* gen() { // 这里的 * 可以看成 async 
    var url = "https://api.github.com/users/github";
    var result = yield fetch(url); // 这里的 yield 可以看成 await 
    console.log(result.bio);
}

var g = gen();
var result = g.next();
result.value.then(data => data.json()).then(data => g.next(data));

1、await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中
async function myFunction() {
    try {
        await somethingThatReturnsAPromise();
    } catch (err) {
        console.log(err);
    }
}
// 另一种写法
async function myFunction() {
    await somethingThatReturnsAPromise()
        .catch(function (err) {
            console.log(err);
        });
}
2、 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);
// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
上面两种写法，getFoo和getBar都是同时触发，这样就会缩短程序的执行时间。
3、await命令只能用在async函数之中，如果用在普通函数，就会报错。
async function dbFuc(db) {
    let docs = [{}, {}, {}];
    // 报错
    docs.forEach(function (doc) {
        await db.post(doc);
    });
}
4、如果确实希望多个请求并发执行，可以使用Promise.all方法。当三个请求都会resolved时，下面两种写法效果相同。
async function dbFuc(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map((doc) => db.post(doc));
    let results = await Promise.all(promises);
    console.log(results);
}
// 或者使用下面的写法
async function dbFuc(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map((doc) => db.post(doc));
    let results = [];
    for (let promise of promises) {
        results.push(await promise);
    }
    console.log(results);
}