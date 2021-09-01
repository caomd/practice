async function async1() {
    console.log('async1 start')
    await async2()
    //类似于
    // new Promise(resolve=>{
    //     console.log('async2')
    // }).then(() => {
    //     console.log('async1 end')
    // })
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout0')
    setTimeout(function () {
        console.log('setTimeout1');
    }, 0);
    setImmediate(() => console.log('setImmediate'));
}, 0)
process.nextTick(() => console.log('nextTick'));
async1();
new Promise(function (resolve) {
    console.log('promise1')
    resolve();
    console.log('promise2')
}).then(function () {
    console.log('promise3')
})
console.log('script end')

// setImmediate 优先 setTimeout

