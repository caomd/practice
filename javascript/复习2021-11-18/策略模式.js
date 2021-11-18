//奖金计算
//策略模式 定义一系列算法，并把它们一个个封装起来，使它们可以相互替换
// 计算奖金，不同工资和级别计算方式不同
// S级*4salary
// B级*3salary
// A级*2salary
var Strategy = {
    S: function (salary) {
        return salary * 4
    },
    B: function (salary) {
        return salary * 3
    },
    A: function (salary) {
        return salary * 2
    }
}
var calculateBonus = function (salary, level) {
    return Strategy[level](salary)
}
console.log(calculateBonus(6000, 'S'))
