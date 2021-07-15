function execution() {
    console.log(this.name)
    return () => {
        console.log('this name', this.name)
    }
}
const person = {
    name: 'xiaoxiao',
    execution: execution
}
const monster = {
    name: 'monster',
    // execution: execution
    inner: person.execution()
}
person.execution.apply(monster)//monster 改变this的指向
// person.execution.call(monster)//monster 改变this的指向
const bindExecution = person.execution.bind(monster)//monster 改变this的指向 没有执行，不会改变原函数
// monster.execution()
person.execution()
// console.log('monster inner')
monster.inner()
// console.log(bindExecution)
bindExecution()//执行打印结果

function show() {
    console.log('this', this)
}
var obj = {
    show: show
}
obj.show()//{ show: [Function: show] }

var obj2 = {
    show: function () {
        show()
    }
}
obj2.show()//Object [global] window

var obj3 = {
    show: function () {
        console.log('this obj3', this)
    }
};
obj3.show();//obj3 { show: [Function: show] }
//逗号表达式 var a = (0,1) a=1,永远返回后一项
(0, obj3.show)();//this obj3 Object [global] 逗号表达式返回一个function,window

var newobj = new obj.show() //this show{} new 的优先级高

var newobj2 = new (obj.show.bind(obj))()// this show{} newobj