/*
 * @Author: caomd 
 * @Date: 2022-01-03 12:32:13 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 12:54:28
 */

var Beverage = function () { }
Beverage.prototype.addWater = function () {
    console.log('add water')
}
Beverage.prototype.boilWater = function () {
    console.log('boil water')
}
Beverage.prototype.addBeverage = function () {
    throw new Error('children must extends this methods')
}
Beverage.prototype.addCondition = function () {
    throw new Error('children must extends methods')
}
Beverage.prototype.addConditionComfirm = function () {
    return true
}
Beverage.prototype.pourCup = function () {
    throw new Error('children must extends methods')
}
Beverage.prototype.init = function () {
    this.addWater()
    this.boilWater()
    this.addBeverage()
    if (this.addConditionComfirm()) {
        this.addCondition()
    }
    this.pourCup()
}
var Coffee = function () { }
Coffee.prototype = new Beverage()
Coffee.prototype.addBeverage = function () {
    console.log('add Coffee')
}
Coffee.prototype.addCondition = function () {
    console.log('add suger and milk')
}
Coffee.prototype.pourCup = function () {
    console.log('pour Coffee In Cup')
}
Coffee.prototype.addConditionComfirm = function () {
    return true
}
var Tea = function () { }
Tea.prototype = new Beverage()
Tea.prototype.addBeverage = function () {
    console.log('add Tea')
}
Tea.prototype.addCondition = function () {
    console.log('add lemon')
}
Tea.prototype.pourCup = function () {
    console.log('pour Tea In Cup')
}
Tea.prototype.addConditionComfirm = function () {
    return false
}
var coffee = new Coffee()
coffee.init()
var tea = new Tea()
tea.init()