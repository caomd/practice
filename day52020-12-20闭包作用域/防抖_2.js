function Person() {
    this.getName = function a() {
        console.log('2');
    }
}
Person.getName = function a() {
    console.log('3')
}
Person.prototype.getName = function () {
    console.log('4')
}
var getName = function () {
    console.log('5')
}
function getName() {
    console.log('6')
}//函数声明会提前所以会被覆盖
Person.getName();//3
// getName()//5
// getName() 5
new Person.getName//3
new Person().getName()//2
let p = new Person();
console.log(p)
p.getName()
console.log(Person)
//防抖
function debounce2(fn, delay) {
    let timer = null;
    return (arguments) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    })
}