//javascript版本策略模式
// strategy可以使函数
var strategies = {
    "S": function (salary) {
        return salary * 4
    },
    "B": function (salary) {
        return salary * 3
    },
    "A": function (salary) {
        return salary * 2
    }
}
var calculateBonus = function (level, salary) {
    return strategies[level](salary)
}
console.log(calculateBonus("A", 3000))
console.log(calculateBonus("S", 50000))

var rule = "minLength:6"
var ary = rule.split(":")
var strategy = ary.shift()
ary.unshift('username')
console.log(ary)
console.log(strategy)