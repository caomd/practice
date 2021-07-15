function outer() {
    var person = 'enen'
    function inner() {
        console.log('name', person)
    }
    return inner
}
outer()
var inner = outer()
function exeFunction() {
    var person = 'exe'
    inner()
}
exeFunction()// name enen 不是在函数的执行栈向上找，而是去定义栈向上找

function c() {
    console.log('ok')
}
function a() {
    function b() {
        c()
    }
    b()
}
a()

var n = 'nn'
function nfun() {
    // var n = 'mm'
    function inner() {
        console.log('inner', n)
    }
    inner()
}
nfun()

// var zyj = 1
// function showPerson() {
//     var zyj = 2
//     console.log(zyj)

// }
// showPerson()//2
// var zyj = 1
// function showPerson() {
//     console.log(zyj)//undefined
//     var zyj = 2

// }
// showPerson()//undefined

// var zyj = 1
// function showPerson() {
//     console.log(zyj)
//     var zyj = 2
//     function person() { }

// }
// showPerson()//undefined

// var zyj = 1
// function showPerson() {
//     console.log(zyj)
//     function person() { }
//     var zyj = 2

// }
// showPerson()//undefined

var zyj = 1
function showPerson() {
    console.log(zyj)
    function person() { }
    var zyj = 2

}
showPerson()//undefined
// console.log('------')
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log('----------')
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i)//10个10
//     }, 0)
// }
// console.log('------')
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 0)
    })(i)//0-9
}
// console.log('------')
// for (let i = 0; i < 10; i++) {
//     console.log(i)//0-9
// }


