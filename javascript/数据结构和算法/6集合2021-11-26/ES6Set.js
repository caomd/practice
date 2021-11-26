//ES6 模拟并集
//示例 Set
let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
let setES6B = new Set()
setES6B.add(3)
setES6B.add(4)
setES6B.add(5)
setES6B.add(6)
let uninonES6AB = new Set()
for (let val of setA) uninonES6AB.add(val)
for (let val of setES6B) uninonES6AB.add(val)
console.log(uninonES6AB.values())

// 模拟交集
let intersectionAB = new Set()
for (let v of setA) {
    if (setES6B.has(v)) {
        intersectionAB.add(v)
    }
}
console.log(intersectionAB.values())
//更简单语法
// let intersectionAB = new Set([x for (x of setA) if (setES6B.has(x))])
// console.log(insetsectionAB.values())

//差集
let difference = new Set()
for (v of setA) {
    if (!setES6B.has(v)) {
        difference.add(v)
    }
}
console.log(difference.values())