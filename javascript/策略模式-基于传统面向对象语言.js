//策略模式 定义一系列算法，并把它们一个个封装起来，使它们可以相互替换
// 计算奖金，不同工资和级别计算方式不同
// S级*4salary
// B级*3salary
// A级*2salary
//将变化和不变分离开
//1奖金类
var Bonus = function () {
    this.salary = null;
    this.strategy = null;
}
//设置工资属性
Bonus.prototype.setSalary = function (salary) {
    this.salary = salary
}
//设置策略
Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy
}
//计算奖金
Bonus.prototype.getBnous = function () {
    return this.strategy.calculate(this.salary)
}
var performanceA = function () { }
performanceA.prototype.calculate = function (salary) {
    return salary * 2
}
var performanceB = function () { }
performanceB.prototype.calculate = function (salary) {
    return salary * 3
}
var performanceS = function () { }
performanceS.prototype.calculate = function (salary) {
    return salary * 4
}
//创建实例
var bonus = new Bonus();
bonus.setSalary(20000);
bonus.setStrategy(new performanceS())
console.log(bonus.getBnous())//80000