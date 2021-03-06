// function outer() {
//     var person = 'bibao'
//     function inner() {
//         console.log('person', person)
//     }
//     inner()
// }
// outer()
//都是闭包，不一定非要返回
function outer() {
    var person = 'bibao'
    function inner() {
        console.log('person', person + '7')
    }
    return inner
}
var inner = outer()
inner()
inner()
//用法 1.私有作用域
function Person() {
    this.attactValue = 100
}
Person.prototype = {
    attack: function () {
        body.bloodValum = this.attactValue - body.defenseValue
    }
}
var person = new Person()
console.log('person', person, person.attactValue)//100

function Person2() {
    this.attackValue = 100
    return {
        attack: function (body) {
            console.log('this', this)//{ attack: [Function: attack] }
            console.log(this.attackValue)//undefined
            // body.bloodValum = this.attackValue - body.defenseValue
        }
    }//返回这个对象，新创建实例对象就是这个返回对象，并没有属性attactValue所以undefined
    // return 1;//返回this 创建的新对象就可以使用attactValue且有值
}
var person2 = new Person2()
var person3 = new Person2()
console.log('person2', person2, person2.attackValue)//undefined
console.log('person3', person3, person3.attack())//undefined
// console.log('promise resolve')
// var fun = Promise.resolve()
// console.log(fun)//Promise { undefined }
// fun.then(d => {
//     console.log('promise resolve ', d)
// })
// let pro = new Promise((resolve, reject) => {
//     console.log('first')
// }).then(d => {
//     console.log(d)
// })
// // console.log('pro', pro)//pro Promise { <pending> }
// const test = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(111);
//     }, 1000);
// }).catch((reason) => {
//     console.log('报错' + reason);
//     console.log('test', test)//test Promise { <pending> }
// });

// setTimeout(() => {
//     console.log(test);//Promise { undefined }
// }, 3000)
//2.存储变量
console.log('-----存储变量 :>> ');
function listDataManager() {
    var localData = null
    return {
        getData: function () {
            console.log('this', this)//{getData:...}
            console.log('localData', localData)//null
            if (localData) {
                // return localData//不确定是否是第一次，所以保证返回数据类型一致，
                //返回Promise对象
                return Promise.resolve(localData)
            }
            // return fetch('xxx').then(data => localData = data.json())
        }
    }
}
// var exeFunciton = listDataManager()
// exeFunciton.getData().then(data => {
//     console.log('得到data', data)
// })
//3.访问当前函数之外的变量
function outerFunction() {
    var date = '719';
    function getDate(str) {//外部传进来的
        console.log(str + date);//访问外部的date
    }
    return getDate('今天是：')//执行
}
outerFunction();//今天是719

function outerFunction2() {
    var date = 719;
    function getDate(str) {
        console.log(str + date++)
    }
    return getDate;
}
const today = outerFunction2()
today('今天还是是：')//719
today('今天不是')//720
today('今天也不是')//721

//修改外部变量的值
function outerFunction3() {
    var date = 719;
    function getDate() {
        // date = str;
        console.log(date+'00000')
        console.log(date++)
    }
    return getDate;
}
const today3 = outerFunction3()
today3();
today3();
today3()

//闭包作用私有化
function Person() {
    var name = 'cxk';
    this.getName = function () {
        return name;
    }
    this.setName = function (value) {
        name = value;
    }
}

const cxk = new Person()

console.log(cxk.getName()) //cxk
cxk.setName('jntm')
console.log(cxk.getName()) //jntm
console.log(name) //name is not defined
console.log(this.name) //undefined

