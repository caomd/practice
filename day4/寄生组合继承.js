function Parent(actions, name) {
    this.actions = actions
    this.name = name
}
Parent.prototype.eat = function () {
    console.log(`${this.name} eat`)
}
function Child(id) {
    Parent.apply(this, Array.from(arguments).slice(1))
    this.id = id
}
// Child.prototype = Parent.prototype
// Child.prototype.constructor = Child
// console.log('Parent', Parent.prototype)//只有eat
// Child.prototype.play = function () {
//     console.log(`${this.name} play`)
// }
// console.log('Parent2', Parent.prototype)//还有play

//正确写法
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
console.log('Parent', Parent.prototype)//只有eat
Child.prototype.play = function () {
    console.log(`${this.name} play`)
}
console.log('Parent2', Parent.prototype)
const c1 = new Child('c1', ['hhhh'], 'child1')
const c2 = new Child('c2', ['hhhh2'], 'child2')
const parent1 = new Parent('p1', ['pp'])

c1.eat()
c1.play()

console.log('c1', c1)
console.log('c2', c2)