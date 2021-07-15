function Parent(actions, name) {
    this.actions = actions
    this.name = name
}
Parent.prototype.eat = function () {
    console.log(`${this.name} eat`)
}

function Child(id) {
    Parent.apply(this, Array.from(arguments).slice(1))//从第二个索引开始
    this.id = id
}
Child.prototype = new Parent()//第二次调用构造函数
Child.prototype.constructor = Child

const child1 = new Child('child1', 'eat', 'child1')
const child2 = new Child('child2', 'run', 'child2')
child1.eat()
child2.eat()
console.log('child1', child1)
console.log('child2', child2)
console.log(child1.eat === child2.eat)//true