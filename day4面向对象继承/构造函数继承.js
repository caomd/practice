function Parent(action, name) {
    this.actions = action
    this.name = name
}
function Child(id, action, name) {
    Parent.call(this, action, name)//把Parent的构造函数在这里执行一遍
    this.id = id
}


const child1 = new Child('child1', 'eat', 'child1');
const child2 = new Child('child2', 'play', 'child2');
const parent1 = new Parent('parent2', 'run', 'parent');
// child1.actions.pop()
// console.log('child1', child1.actions)//['eat]
// console.log('child2', child2.actions)//['eat','run']
// console.log('parent1', parent1.actions)//['eat','run']


console.log('child1', child1)
console.log('child2', child2)
console.log('parent1', parent1)
console.log(child1.__proto__ === child2.__proto__)//true
console.log(child1 === child2)//false 占用内存