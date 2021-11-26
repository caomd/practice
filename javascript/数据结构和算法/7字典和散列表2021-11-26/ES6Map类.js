//原生Map类
var map = new Map()
map.set('Gandalf', 'gandalf@email.com')
map.set('John', 'john@email.com')
map.set('Tyrion', 'tyrion@email.com')
console.log(map.has('Gandalf'))
console.log(map.size)
console.log(map.keys())
console.log(map.values())
console.log(map.get('Tyrion'))
console.log(map.delete('John'))

//WeakMap类、
var map = new WeakMap()
var obj1 = { name: 'Gandalf' },
    obj2 = { name: 'John' },
    obj3 = { name: 'Tyrion' }
map.set(obj1, 'gandalf@email.com')
map.set(obj2, 'john@email.com')
map.set(obj3, 'tyrion@email.com')
console.log(map.has(obj1) + 'WeakMap has')
console.log(map.get(obj3) + 'WeakMap get')
map.delete(obj2)