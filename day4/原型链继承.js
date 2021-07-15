function Parent() {
    this.name = 'parentName'
    this.actions = ['1', '2']//引用类型，被继承，实例修改都会被修改
}
Parent.prototype.getName = function () {
    console.log(this.name)
}
function Child() {
}

Child.prototype = new Parent();//Parent实例既可以继承构造函数的又继承原型链上的会覆盖原Child的prototype,而没有了constructor
Child.prototype.constructor = Child;

const child1 = new Child()
const child2 = new Child()
const parent1 = new Parent()
child1.getName = function () {
    console.log('e')
}
child1.getName()//e
parent1.getName()//parentName

child1.actions.pop()
console.log('child1', child1.actions);//['1']
console.log('child2', child2.actions);//['1']
console.log('parent1', parent1.actions)//['1', '2']

