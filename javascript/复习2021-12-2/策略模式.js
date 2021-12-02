/*
 * @Author: caomd
 * @Date: 2021-12-02 11:03:33
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-02 11:11:13
 */
//策略模式 封装算法
//1.奖金的计算
// S级*4salary
// B级*3salary
// A级*2salary
var Salary = {
    S: function (salary) {
        return 4 * salary
    },
    B: function (salary) {
        return 3 * salary
    },
    A: function (salary) {
        return 2 * salary
    }
}
var calculateBonus = function (level, salary) {
    return Salary[level](salary)
}
//测试
var bonus1 = calculateBonus('S', 30000)
var bonus2 = calculateBonus('B', 10000)
var bonus3 = calculateBonus('A', 8000)
console.log(bonus1)
console.log(bonus2)
console.log(bonus3)